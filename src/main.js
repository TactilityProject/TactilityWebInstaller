import './app.css';
import { getUnsupportedReason, initInstallDialog, startInstall } from './install';
import hiddenDeviceIds from './hidden-devices.json';
import { getLocale, initLanguageMenu, t, translatePage } from './i18n';

import toolbarLogo from '../assets/images/toolbar-logo.svg';
import '../assets/images/favicon.svg';

const VERSIONS = ['stable', 'unstable'];

/** Device identifiers that are never shown, even when the CDN index lists them */
const HIDDEN_DEVICE_IDS = new Set(hiddenDeviceIds);

/** A Main build older than this gets a warning that recommends the Beta build */
const STALE_MAIN_AGE_MS = 28 * 24 * 60 * 60 * 1000;

const $ = (id) => document.getElementById(id);

const state = {
    /** version name -> index.json content, or null when it failed to load */
    indexes: {},
    /** merged devices: { id, vendor, name, label, haystack, words, builds: { stable?, unstable? } } */
    devices: [],
    selectedId: null,
    preferredVersion: 'unstable',
    loading: false,
    query: '',
    /** Whether the user confirmed installing an outdated Main build */
    staleMainConfirmed: false,
};

function getCdnUrl(version, path) {
    const directory = version === 'unstable' ? 'snapshot' : version;
    // CDN_BASE_URL is injected by webpack: empty (dev server proxy) when serving
    return `${CDN_BASE_URL}/firmware/${directory}/${path}`;
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
            if (HIDDEN_DEVICE_IDS.has(build.id)) continue;
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
    state.devices.sort((a, b) => a.label.localeCompare(b.label, 'en', { sensitivity: 'base', numeric: true }));
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

/** Whether the device's Main build is outdated while a Beta build is available. */
function isStaleMain(device, version) {
    const created = state.indexes.stable && Date.parse(state.indexes.stable.created);
    return version === 'stable'
        && Boolean(device.builds.unstable)
        && Number.isFinite(created)
        && Date.now() - created > STALE_MAIN_AGE_MS;
}

function updateInstallButton() {
    const device = getSelectedDevice();
    const blockedByStaleMain = device !== null && isStaleMain(device, getActiveVersion(device)) && !state.staleMainConfirmed;
    $('InstallButton').disabled = getUnsupportedReason() !== null || blockedByStaleMain;
}

function createStaleMainNotice() {
    const notice = createNotice('', 'warning');
    notice.classList.add('notice-stale');
    const text = document.createElement('p');
    text.textContent = t('staleMainNotice');
    const label = document.createElement('label');
    label.className = 'notice-check';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = state.staleMainConfirmed;
    checkbox.addEventListener('change', () => {
        state.staleMainConfirmed = checkbox.checked;
        updateInstallButton();
    });
    const caption = document.createElement('span');
    caption.textContent = t('staleMainConfirm');
    label.append(checkbox, caption);
    notice.append(text, label);
    return notice;
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
            button.append(createBadge(t('betaOnly'), 'accent'));
        } else if (!device.builds.unstable) {
            button.append(createBadge(t('mainOnly'), 'muted'));
        }
        if (device.builds[getActiveVersion(device)].incubating) {
            button.append(createBadge(t('incubating'), 'warning'));
        }

        const item = document.createElement('li');
        item.append(button);
        list.append(item);
    }

    if (state.devices.length === 0) {
        return; // Loading or error state owns the status text
    }
    if (devices.length === 0) {
        status.textContent = t('noMatch', { query: state.query.trim() });
    } else if (devices.length === state.devices.length) {
        status.textContent = t('deviceCount', { count: devices.length });
    } else {
        status.textContent = t('deviceCountFiltered', { count: devices.length, total: state.devices.length });
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
        document.querySelector(`[data-version-label="${version}"]`).textContent = index ? index.version : t('unavailable');
    }
}

function renderDetails() {
    const device = getSelectedDevice();
    $('DetailsEmpty').hidden = device !== null;
    $('DetailsContent').hidden = device === null;
    updateInstallButton();
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
        const versionName = t(input.value === 'stable' ? 'versionStable' : 'versionUnstable');
        input.closest('.segment').title = available ? '' : t('noBuild', { version: versionName });
    }

    const details = $('VersionDetails');
    details.replaceChildren();
    if (index.created && index.gitCommit) {
        const link = document.createElement('a');
        link.href = `https://github.com/ByteWelder/Tactility/commit/${index.gitCommit}`;
        link.textContent = index.gitCommit.substring(0, 7);
        // Split the sentence around {commit}, so the link can sit anywhere in the translation
        const [before, after = ''] = t('builtOn', { date: new Date(index.created).toLocaleString(getLocale()) }).split('{commit}');
        details.append(before, link, after);
    }

    const info = $('DeviceInfo');
    info.replaceChildren();
    if (isStaleMain(device, version)) {
        info.append(createStaleMainNotice());
    }
    if (build.incubating) {
        info.append(createNotice(t('incubatingNotice'), 'warning'));
    }
    if (build.warningMessage) {
        info.append(createNotice(build.warningMessage, 'warning'));
    }
    if (build.infoMessage) {
        info.append(createNotice(build.infoMessage, 'info'));
    }
}

function selectDevice(id) {
    if (id !== state.selectedId) {
        state.staleMainConfirmed = false;
    }
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
    status.textContent = `${t('loadFailed')} `;
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'button-link';
    retry.textContent = t('tryAgain');
    retry.addEventListener('click', load);
    status.append(retry);
}

async function load() {
    state.loading = true;
    $('ListStatus').textContent = t('loadingDevices');
    const results = await Promise.allSettled(VERSIONS.map(fetchIndex));
    results.forEach((result, i) => {
        state.indexes[VERSIONS[i]] = result.status === 'fulfilled' ? result.value : null;
        if (result.status === 'rejected') {
            console.warn(`Failed to fetch ${VERSIONS[i]} index`, result.reason);
        }
    });

    state.loading = false;
    mergeDevices();
    renderVersionLabels();
    if (state.devices.length === 0) {
        showLoadError();
    }
    renderDeviceList();
    renderDetails();
    selectDeviceFromHash();
}

translatePage();
initLanguageMenu($('Language'), () => {
    if (state.loading) {
        $('ListStatus').textContent = t('loadingDevices');
    } else if (state.devices.length === 0) {
        showLoadError();
    }
    renderVersionLabels();
    renderDeviceList();
    renderDetails();
});

$('NavbarImage').src = toolbarLogo;
const unsupportedReason = getUnsupportedReason();
$('UnsupportedNotice').hidden = unsupportedReason !== 'browser';
$('InsecureNotice').hidden = unsupportedReason !== 'insecure';
updateInstallButton();
initInstallDialog();

$('InstallButton').addEventListener('click', () => {
    const device = getSelectedDevice();
    if (device === null) {
        return;
    }
    const version = getActiveVersion(device);
    const label = t('installLabel', { version: state.indexes[version].version, device: device.label });
    startInstall(getCdnUrl(version, `${device.id}.json`), label).catch((error) => {
        console.error(error);
        alert(t('openPortFailed', { message: error.message }));
    });
});

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
    state.staleMainConfirmed = false;
    renderDeviceList();
    renderDetails();
});

window.addEventListener('hashchange', selectDeviceFromHash);

load();
