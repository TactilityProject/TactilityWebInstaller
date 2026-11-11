import 'esp-web-tools';
import './app.css';

import toolbarLogo from '../assets/images/toolbar-logo.svg';
import '../assets/images/favicon.svg';

const VERSIONS = ['stable', 'unstable'];

const $ = (id) => document.getElementById(id);

const state = {
    /** version name -> index.json content, or null when it failed to load */
    indexes: {},
    /** merged devices: { id, vendor, name, label, haystack, words, builds: { stable?, unstable? } } */
    devices: [],
    selectedId: null,
    preferredVersion: 'unstable',
    query: '',
};

function getCdnUrl(version, path) {
    const directory = version === 'unstable' ? 'snapshot' : version;
    return `https://cdn.tactilityproject.org/firmware/${directory}/${path}`;
}

/** Lowercase and strip punctuation, so "tdeck" matches "T-Deck". */
function squash(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function fetchIndex(version) {
    return fetch(getCdnUrl(version, 'index.json')).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
    });
}

function mergeDevices() {
    const byId = new Map();
    for (const version of VERSIONS) {
        const index = state.indexes[version];
        if (!index) continue;
        for (const build of index.devices) {
            let device = byId.get(build.id);
            if (!device) {
                device = { id: build.id, builds: {} };
                byId.set(build.id, device);
            }
            device.builds[version] = build;
            // Later versions win, so naming follows the newest build
            device.vendor = build.vendor;
            device.name = build.name;
        }
    }

    state.devices = [...byId.values()];
    for (const device of state.devices) {
        device.showVendor = device.vendor !== device.name;
        device.label = device.showVendor ? `${device.vendor} ${device.name}` : device.name;
        const text = `${device.label} ${device.id}`;
        device.haystack = `${text.toLowerCase()} ${squash(text)}`;
        device.words = device.label.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    }
    state.devices.sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: 'base', numeric: true }));
}

/**
 * Whether the token can be split into pieces that are each the start of a word, in word order.
 * Makes "m5paper" match "M5Stack PaperS3" and "tdeck" match "T-Deck".
 */
function matchesWordStarts(token, words, firstWord = 0) {
    if (token === '') {
        return true;
    }
    for (let i = firstWord; i < words.length; i++) {
        const word = words[i];
        // Pieces of a single character only count when they are the entire word, to limit noise
        const minLength = Math.min(2, word.length);
        for (let length = Math.min(word.length, token.length); length >= minLength; length--) {
            if (word.startsWith(token.slice(0, length)) && matchesWordStarts(token.slice(length), words, i + 1)) {
                return true;
            }
        }
    }
    return false;
}

function matchesToken(device, token) {
    if (device.haystack.includes(token)) {
        return true;
    }
    const squashed = squash(token);
    return squashed !== '' && (device.haystack.includes(squashed) || matchesWordStarts(squashed, device.words));
}

function getFilteredDevices() {
    const tokens = state.query.toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) {
        return state.devices;
    }
    return state.devices.filter((device) => tokens.every((token) => matchesToken(device, token)));
}

function getSelectedDevice() {
    return state.devices.find((device) => device.id === state.selectedId) || null;
}

/** The version to show for a device: the preferred one, or whichever is available. */
function getActiveVersion(device) {
    if (device.builds[state.preferredVersion]) {
        return state.preferredVersion;
    }
    return VERSIONS.find((version) => device.builds[version]);
}

function createBadge(text, kind) {
    const badge = document.createElement('span');
    badge.className = `badge badge-${kind}`;
    badge.textContent = text;
    return badge;
}

function renderDeviceList() {
    const list = $('DeviceList');
    const status = $('ListStatus');
    const devices = getFilteredDevices();
    list.replaceChildren();

    for (const device of devices) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'device';
        button.dataset.id = device.id;
        button.setAttribute('aria-pressed', String(device.id === state.selectedId));

        const text = document.createElement('span');
        text.className = 'device-text';
        if (device.showVendor) {
            const vendor = document.createElement('span');
            vendor.className = 'device-vendor';
            vendor.textContent = device.vendor;
            text.append(vendor);
        }
        const name = document.createElement('span');
        name.className = 'device-name';
        name.textContent = device.name;
        text.append(name);
        button.append(text);

        if (!device.builds.stable) {
            button.append(createBadge('Unstable only', 'accent'));
        } else if (!device.builds.unstable) {
            button.append(createBadge('Stable only', 'muted'));
        }
        if (device.builds[getActiveVersion(device)].incubating) {
            button.append(createBadge('Incubating', 'warning'));
        }

        const item = document.createElement('li');
        item.append(button);
        list.append(item);
    }

    if (state.devices.length === 0) {
        return; // Loading or error state owns the status text
    }
    if (devices.length === 0) {
        status.textContent = `No devices match “${state.query.trim()}”.`;
    } else if (devices.length === state.devices.length) {
        status.textContent = `${devices.length} supported devices`;
    } else {
        status.textContent = `${devices.length} of ${state.devices.length} devices`;
    }
}

function createNotice(html, kind) {
    const notice = document.createElement('div');
    notice.className = `notice notice-${kind}`;
    // Messages come from our own CDN and contain markup such as <br/>
    notice.innerHTML = html;
    return notice;
}

function renderVersionLabels() {
    for (const version of VERSIONS) {
        const index = state.indexes[version];
        document.querySelector(`[data-version-label="${version}"]`).textContent = index ? index.version : 'Unavailable';
    }
}

function renderDetails() {
    const device = getSelectedDevice();
    $('DetailsEmpty').hidden = device !== null;
    $('DetailsContent').hidden = device === null;
    if (device === null) {
        return;
    }

    const version = getActiveVersion(device);
    const build = device.builds[version];
    const index = state.indexes[version];

    $('SelectedVendor').textContent = device.showVendor ? device.vendor : '';
    $('SelectedName').textContent = device.name;

    for (const input of document.querySelectorAll('input[name="version"]')) {
        const available = Boolean(device.builds[input.value]);
        input.disabled = !available;
        input.checked = input.value === version;
        input.closest('.segment').title = available ? '' : `No ${input.value} build for this device`;
    }

    const details = $('VersionDetails');
    details.replaceChildren();
    if (index.created && index.gitCommit) {
        const link = document.createElement('a');
        link.href = `https://github.com/ByteWelder/Tactility/commit/${index.gitCommit}`;
        link.textContent = index.gitCommit.substring(0, 7);
        details.append(`Built on ${new Date(index.created).toLocaleString()} from commit `, link);
    }

    const info = $('DeviceInfo');
    info.replaceChildren();
    if (build.incubating) {
        info.append(createNotice('This device is incubating. It is not fully implemented!', 'warning'));
    }
    if (build.warningMessage) {
        info.append(createNotice(build.warningMessage, 'warning'));
    }
    if (build.infoMessage) {
        info.append(createNotice(build.infoMessage, 'info'));
    }

    $('Installer').manifest = getCdnUrl(version, `${device.id}.json`);
}

function selectDevice(id) {
    state.selectedId = id;
    for (const button of document.querySelectorAll('.device')) {
        button.setAttribute('aria-pressed', String(button.dataset.id === id));
    }
    renderDetails();
    if (getHashDeviceId() !== id) {
        // Replace rather than push, so browsing devices doesn't fill up the history
        history.replaceState(null, '', `#${encodeURIComponent(id)}`);
    }
}

function getHashDeviceId() {
    try {
        return decodeURIComponent(location.hash.slice(1));
    } catch (error) {
        return '';
    }
}

/** Select the device from the URL, e.g. https://install.tactilityproject.org/#lilygo-tdeck */
function selectDeviceFromHash() {
    const id = getHashDeviceId();
    if (id === state.selectedId || !state.devices.some((device) => device.id === id)) {
        return;
    }
    if (!getFilteredDevices().some((device) => device.id === id)) {
        // Don't leave the linked device hidden behind a search query
        state.query = '';
        $('Search').value = '';
        renderDeviceList();
    }
    selectDevice(id);
    const button = document.querySelector('.device[aria-pressed="true"]');
    if (button) {
        button.scrollIntoView({ block: 'nearest' });
    }
}

function showLoadError() {
    const status = $('ListStatus');
    status.textContent = 'Failed to fetch device info. ';
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'button-link';
    retry.textContent = 'Try again';
    retry.addEventListener('click', load);
    status.append(retry);
}

async function load() {
    $('ListStatus').textContent = 'Loading devices…';
    const results = await Promise.allSettled(VERSIONS.map(fetchIndex));
    results.forEach((result, i) => {
        state.indexes[VERSIONS[i]] = result.status === 'fulfilled' ? result.value : null;
        if (result.status === 'rejected') {
            console.warn(`Failed to fetch ${VERSIONS[i]} index`, result.reason);
        }
    });

    mergeDevices();
    renderVersionLabels();
    if (state.devices.length === 0) {
        showLoadError();
    }
    renderDeviceList();
    renderDetails();
    selectDeviceFromHash();
}

$('NavbarImage').src = toolbarLogo;
$('UnsupportedNotice').hidden = 'serial' in navigator;

$('Search').addEventListener('input', (event) => {
    state.query = event.target.value;
    renderDeviceList();
});

$('Search').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const first = getFilteredDevices()[0];
        if (first) {
            selectDevice(first.id);
        }
    }
});

$('DeviceList').addEventListener('click', (event) => {
    const button = event.target.closest('.device');
    if (button) {
        selectDevice(button.dataset.id);
    }
});

$('VersionOptions').addEventListener('change', (event) => {
    state.preferredVersion = event.target.value;
    renderDeviceList();
    renderDetails();
});

window.addEventListener('hashchange', selectDeviceFromHash);

load();
