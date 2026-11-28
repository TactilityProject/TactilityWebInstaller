import { t } from './i18n';

const BAUDRATE = 115200;

const $ = (id) => document.getElementById(id);

/** An error with a message that is fit to show to the user. */
class InstallError extends Error {}

/** The install that the dialog is currently showing: { port, manifestUrl, label } */
let session = null;
let busy = false;

/** Why installing is impossible in this browser context, or null when it is possible. */
export function getUnsupportedReason() {
    if (!window.isSecureContext) {
        return 'insecure';
    }
    return 'serial' in navigator ? null : 'browser';
}

function showStep(step) {
    for (const element of $('InstallDialog').querySelectorAll('[data-step]')) {
        element.hidden = element.dataset.step !== step;
    }
}

/** @param {?number} fraction progress from 0 to 1, or null when it is unknown */
function setStatus(text, fraction = null) {
    $('InstallStatus').textContent = text;
    const bar = $('InstallBar');
    if (fraction === null) {
        bar.removeAttribute('value');
    } else {
        bar.value = fraction;
    }
}

function log(text) {
    const output = $('InstallLog');
    output.textContent += text;
    output.scrollTop = output.scrollHeight;
}

const terminal = {
    clean: () => { $('InstallLog').textContent = ''; },
    write: (text) => log(text),
    writeLine: (text) => log(`${text}\n`),
};

function showResult(title, text, canRetry) {
    $('InstallResultTitle').textContent = title;
    $('InstallResultText').textContent = text;
    $('InstallRetry').hidden = !canRetry;
    showStep('result');
}

async function fetchOk(url) {
    let response;
    try {
        response = await fetch(url);
    } catch (error) {
        throw new InstallError(t('downloadFailed', { url }), { cause: error });
    }
    if (!response.ok) {
        throw new InstallError(t('downloadFailedStatus', { url, status: response.status }));
    }
    return response;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Restart the chip by pulsing its EN pin through the RTS line, like esptool.py does.
 * The hard reset of esptool-js only releases RTS, which doesn't restart boards with a USB-UART bridge.
 */
async function hardReset(transport) {
    await transport.setRTS(true);
    await sleep(100);
    await transport.setRTS(false);
    await sleep(50);
}

async function flash({ port, manifestUrl }, erase) {
    setStatus(t('preparing'));
    const [{ ESPLoader, Transport }, manifest] = await Promise.all([
        import('esptool-js'),
        fetchOk(manifestUrl).then((response) => response.json()),
    ]);

    const transport = new Transport(port);
    try {
        const loader = new ESPLoader({
            transport,
            baudrate: BAUDRATE,
            romBaudrate: BAUDRATE,
            terminal,
            resetConstructors: { hardReset: () => ({ reset: () => hardReset(transport) }) },
        });

        setStatus(t('connecting'));
        try {
            await loader.main();
        } catch (error) {
            throw new InstallError(t('connectFailed'), { cause: error });
        }

        const chip = loader.chip.CHIP_NAME;
        const build = manifest.builds.find((candidate) => candidate.chipFamily === chip);
        if (!build) {
            throw new InstallError(t('wrongChip', { chip }));
        }

        setStatus(t('downloading'));
        const baseUrl = new URL(manifestUrl, location.href);
        const fileArray = await Promise.all(build.parts.map(async (part) => {
            const response = await fetchOk(new URL(part.path, baseUrl));
            return { address: part.offset, data: new Uint8Array(await response.arrayBuffer()) };
        }));

        if (erase) {
            setStatus(t('erasing'));
            await loader.eraseFlash();
        }

        const totalSize = fileArray.reduce((sum, file) => sum + file.data.length, 0);
        let finishedSize = 0;
        setStatus(t('installProgress', { percent: 0 }), 0);
        await loader.writeFlash({
            fileArray,
            flashMode: 'keep',
            flashFreq: 'keep',
            flashSize: 'keep',
            eraseAll: false,
            compress: true,
            // "written" and "total" count compressed bytes, so scale them to the size of the file
            reportProgress: (fileIndex, written, total) => {
                const fileSize = fileArray[fileIndex].data.length;
                const fraction = (finishedSize + (written / total) * fileSize) / totalSize;
                setStatus(t('installProgress', { percent: Math.floor(fraction * 100) }), fraction);
                if (written === total) {
                    finishedSize += fileSize;
                }
            },
        });

        setStatus(t('restarting'));
        await loader.after('hard_reset');
    } catch (error) {
        // Don't leave the device stuck in its bootloader
        await hardReset(transport).catch((resetError) => console.warn('Failed to reset the device', resetError));
        throw error;
    } finally {
        await transport.disconnect().catch((error) => console.warn('Failed to close the serial port', error));
    }
}

async function run() {
    const erase = $('InstallErase').checked;
    busy = true;
    showStep('progress');
    try {
        await flash(session, erase);
        showResult(t('complete'), t('completeText', { label: session.label }), false);
    } catch (error) {
        console.error(error);
        log(`\nError: ${error.message}\n`);
        const text = error instanceof InstallError
            ? error.message
            : t('failedText', { message: error.message });
        showResult(t('failed'), text, true);
    } finally {
        busy = false;
    }
}

function showConfirm() {
    $('InstallSummary').textContent = t('installSummary', { label: session.label });
    showStep('confirm');
}

/**
 * Ask for a serial port and open the install dialog. Must be called from a user gesture.
 * @param {string} manifestUrl URL of an ESP Web Tools manifest
 * @param {string} label what is being installed, e.g. "Tactility 1.0.0 for LilyGO T-Deck"
 */
export async function startInstall(manifestUrl, label) {
    let port;
    try {
        port = await navigator.serial.requestPort();
    } catch (error) {
        if (error.name === 'NotFoundError') {
            return; // The user closed the port picker
        }
        throw error;
    }
    session = { port, manifestUrl, label };
    $('InstallErase').checked = false;
    $('InstallLog').textContent = '';
    showConfirm();
    $('InstallDialog').showModal();
}

export function initInstallDialog() {
    const dialog = $('InstallDialog');
    $('InstallConfirm').addEventListener('click', run);
    $('InstallRetry').addEventListener('click', showConfirm);
    for (const button of dialog.querySelectorAll('[data-close]')) {
        button.addEventListener('click', () => dialog.close());
    }
    // Escape must not close the dialog halfway through an install
    dialog.addEventListener('cancel', (event) => {
        if (busy) {
            event.preventDefault();
        }
    });
}
