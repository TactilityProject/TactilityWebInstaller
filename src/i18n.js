/**
 * Translations of the installer. The language is, in order of priority:
 * 1. the "lang" query parameter (the translated pages of tactilityproject.org link with it, e.g. ?lang=de)
 * 2. the language picked in the language menu (remembered in localStorage)
 * 3. the first of the browser's preferred languages that is available
 * 4. English
 *
 * Texts with {name} placeholders are filled in by t(key, { name: value }).
 * Texts that come from the firmware index on the CDN (device warnings and notes) are not translated.
 */

const WEBSITE = 'https://tactilityproject.org';
const STORAGE_KEY = 'language';

export const LANGUAGES = [
    { code: 'en', name: 'English', htmlLang: 'en' },
    { code: 'de', name: 'Deutsch', htmlLang: 'de' },
    { code: 'es', name: 'Español', htmlLang: 'es' },
    { code: 'ja', name: '日本語', htmlLang: 'ja' },
    { code: 'zh', name: '简体中文', htmlLang: 'zh-CN' },
];

const STRINGS = {
    en: {
        title: 'Tactility Web Installer',
        description: 'Web install tool for the Tactility operating system',
        brandSub: 'Web Installer',
        language: 'Language',
        otherInstallMethods: 'Other install methods',
        support: 'Support',
        introTitle: 'Install Tactility on your device',
        introText: 'Connect your ESP32 device over USB, pick it from the list and flash it straight from the browser.',
        unsupportedBrowser: 'Your browser does not support Web Serial. Use a desktop version of Chrome, Edge or Opera, or check the <a href="{url}">alternative install methods</a>.',
        insecure: 'Installing only works when this page is opened over HTTPS or on localhost.',
        chooseDevice: 'Choose your device',
        searchPlaceholder: 'Search by brand or name…',
        searchLabel: 'Search devices by brand or name',
        loadingDevices: 'Loading devices…',
        pickVersion: 'Pick a version and install',
        selectDevice: 'Select a device to continue.',
        version: 'Version',
        versionStable: 'Main',
        versionUnstable: 'Beta',
        installNow: 'Install now',
        betaOnly: 'Beta only',
        mainOnly: 'Main only',
        incubating: 'Incubating',
        noMatch: 'No devices match “{query}”.',
        deviceCount: '{count} supported devices',
        deviceCountFiltered: '{count} of {total} devices',
        unavailable: 'Unavailable',
        noBuild: 'No {version} build for this device',
        builtOn: 'Built on {date} from commit {commit}',
        incubatingNotice: 'This device is incubating. It is not fully implemented!',
        staleMainNotice: 'The Main build currently lacks many of the latest features and fixes. It is recommended to install the Beta build instead.',
        staleMainConfirm: 'Install the old Main build anyway',
        loadFailed: 'Failed to fetch device info.',
        tryAgain: 'Try again',
        installLabel: 'Tactility {version} for {device}',
        openPortFailed: 'Failed to open the serial port: {message}',
        installTitle: 'Install Tactility',
        installSummary: '{label} will be installed on the device you selected.',
        eraseFirst: 'Erase the device first',
        eraseHint: 'Recommended when installing for the first time. Deletes all data on the device.',
        cancel: 'Cancel',
        install: 'Install',
        installing: 'Installing',
        keepConnected: 'Keep the device connected and this page open.',
        close: 'Close',
        log: 'Log',
        preparing: 'Preparing…',
        connecting: 'Connecting to the device…',
        connectFailed: 'Failed to connect to the device. Make sure no other program is using it, then try again while holding the BOOT button.',
        wrongChip: 'The connected device has an {chip} chip, which this firmware does not support. Check that you selected the right device.',
        downloading: 'Downloading firmware…',
        downloadFailed: 'Failed to download {url}. Check your internet connection.',
        downloadFailedStatus: 'Failed to download {url} (HTTP {status}).',
        erasing: 'Erasing the device. This can take a minute…',
        installProgress: 'Installing… {percent}%',
        restarting: 'Restarting the device…',
        complete: 'Installation complete',
        completeText: '{label} is installed. Your device is restarting.',
        failed: 'Installation failed',
        failedText: 'Installation failed: {message} Reconnect the device and try again.',
    },
    de: {
        title: 'Tactility Web-Installer',
        description: 'Web-Installationstool für das Betriebssystem Tactility',
        brandSub: 'Web-Installer',
        language: 'Sprache',
        otherInstallMethods: 'Andere Installationswege',
        support: 'Hilfe',
        introTitle: 'Installiere Tactility auf deinem Gerät',
        introText: 'Verbinde dein ESP32-Gerät per USB, wähle es aus der Liste und flashe es direkt aus dem Browser.',
        unsupportedBrowser: 'Dein Browser unterstützt Web Serial nicht. Nutze eine Desktop-Version von Chrome, Edge oder Opera oder sieh dir die <a href="{url}">anderen Installationswege</a> an.',
        insecure: 'Die Installation funktioniert nur, wenn diese Seite über HTTPS oder auf localhost geöffnet ist.',
        chooseDevice: 'Wähle dein Gerät',
        searchPlaceholder: 'Nach Marke oder Name suchen…',
        searchLabel: 'Geräte nach Marke oder Name durchsuchen',
        loadingDevices: 'Geräte werden geladen…',
        pickVersion: 'Version wählen und installieren',
        selectDevice: 'Wähle ein Gerät, um fortzufahren.',
        version: 'Version',
        versionStable: 'Main',
        versionUnstable: 'Beta',
        installNow: 'Jetzt installieren',
        betaOnly: 'Nur Beta',
        mainOnly: 'Nur Main',
        incubating: 'In Entwicklung',
        noMatch: 'Keine Geräte passen zu „{query}“.',
        deviceCount: '{count} unterstützte Geräte',
        deviceCountFiltered: '{count} von {total} Geräten',
        unavailable: 'Nicht verfügbar',
        noBuild: 'Kein {version}-Build für dieses Gerät',
        builtOn: 'Erstellt am {date} aus Commit {commit}',
        incubatingNotice: 'Dieses Gerät ist noch in Entwicklung. Es ist nicht vollständig implementiert!',
        staleMainNotice: 'Dem Main-Build fehlen derzeit viele der neuesten Funktionen und Fehlerbehebungen. Es wird empfohlen, stattdessen den Beta-Build zu installieren.',
        staleMainConfirm: 'Den alten Main-Build trotzdem installieren',
        loadFailed: 'Die Geräteinformationen konnten nicht geladen werden.',
        tryAgain: 'Erneut versuchen',
        installLabel: 'Tactility {version} für {device}',
        openPortFailed: 'Die serielle Schnittstelle konnte nicht geöffnet werden: {message}',
        installTitle: 'Tactility installieren',
        installSummary: '{label} wird auf dem ausgewählten Gerät installiert.',
        eraseFirst: 'Gerät vorher löschen',
        eraseHint: 'Empfohlen bei der ersten Installation. Löscht alle Daten auf dem Gerät.',
        cancel: 'Abbrechen',
        install: 'Installieren',
        installing: 'Installation läuft',
        keepConnected: 'Lass das Gerät verbunden und diese Seite geöffnet.',
        close: 'Schließen',
        log: 'Protokoll',
        preparing: 'Vorbereitung…',
        connecting: 'Verbindung zum Gerät wird hergestellt…',
        connectFailed: 'Keine Verbindung zum Gerät. Stelle sicher, dass kein anderes Programm es verwendet, und versuche es erneut, während du die BOOT-Taste gedrückt hältst.',
        wrongChip: 'Das verbundene Gerät hat einen {chip}-Chip, den diese Firmware nicht unterstützt. Prüfe, ob du das richtige Gerät ausgewählt hast.',
        downloading: 'Firmware wird heruntergeladen…',
        downloadFailed: '{url} konnte nicht heruntergeladen werden. Prüfe deine Internetverbindung.',
        downloadFailedStatus: '{url} konnte nicht heruntergeladen werden (HTTP {status}).',
        erasing: 'Gerät wird gelöscht. Das kann eine Minute dauern…',
        installProgress: 'Installation… {percent} %',
        restarting: 'Gerät wird neu gestartet…',
        complete: 'Installation abgeschlossen',
        completeText: '{label} ist installiert. Dein Gerät startet neu.',
        failed: 'Installation fehlgeschlagen',
        failedText: 'Installation fehlgeschlagen: {message} Verbinde das Gerät erneut und versuche es noch einmal.',
    },
    es: {
        title: 'Instalador web de Tactility',
        description: 'Herramienta de instalación web para el sistema operativo Tactility',
        brandSub: 'Instalador web',
        language: 'Idioma',
        otherInstallMethods: 'Otras formas de instalar',
        support: 'Ayuda',
        introTitle: 'Instala Tactility en tu dispositivo',
        introText: 'Conecta tu dispositivo ESP32 por USB, elígelo de la lista y flashéalo directamente desde el navegador.',
        unsupportedBrowser: 'Tu navegador no es compatible con Web Serial. Usa una versión de escritorio de Chrome, Edge u Opera, o consulta las <a href="{url}">otras formas de instalar</a>.',
        insecure: 'La instalación solo funciona si esta página se abre por HTTPS o en localhost.',
        chooseDevice: 'Elige tu dispositivo',
        searchPlaceholder: 'Busca por marca o nombre…',
        searchLabel: 'Buscar dispositivos por marca o nombre',
        loadingDevices: 'Cargando dispositivos…',
        pickVersion: 'Elige una versión e instala',
        selectDevice: 'Selecciona un dispositivo para continuar.',
        version: 'Versión',
        versionStable: 'Principal',
        versionUnstable: 'Beta',
        installNow: 'Instalar ahora',
        betaOnly: 'Solo beta',
        mainOnly: 'Solo principal',
        incubating: 'En desarrollo',
        noMatch: 'Ningún dispositivo coincide con «{query}».',
        deviceCount: '{count} dispositivos compatibles',
        deviceCountFiltered: '{count} de {total} dispositivos',
        unavailable: 'No disponible',
        noBuild: 'No hay versión {version} para este dispositivo',
        builtOn: 'Compilado el {date} a partir del commit {commit}',
        incubatingNotice: 'Este dispositivo está en desarrollo. ¡No está implementado por completo!',
        staleMainNotice: 'A la versión Principal le faltan actualmente muchas de las últimas funciones y correcciones. Se recomienda instalar la versión Beta.',
        staleMainConfirm: 'Instalar la versión Principal antigua de todos modos',
        loadFailed: 'No se pudo cargar la información de los dispositivos.',
        tryAgain: 'Reintentar',
        installLabel: 'Tactility {version} para {device}',
        openPortFailed: 'No se pudo abrir el puerto serie: {message}',
        installTitle: 'Instalar Tactility',
        installSummary: 'Se instalará {label} en el dispositivo que has seleccionado.',
        eraseFirst: 'Borrar el dispositivo antes',
        eraseHint: 'Recomendado en la primera instalación. Elimina todos los datos del dispositivo.',
        cancel: 'Cancelar',
        install: 'Instalar',
        installing: 'Instalando',
        keepConnected: 'Mantén el dispositivo conectado y esta página abierta.',
        close: 'Cerrar',
        log: 'Registro',
        preparing: 'Preparando…',
        connecting: 'Conectando con el dispositivo…',
        connectFailed: 'No se pudo conectar con el dispositivo. Asegúrate de que ningún otro programa lo esté usando y vuelve a intentarlo mientras mantienes pulsado el botón BOOT.',
        wrongChip: 'El dispositivo conectado tiene un chip {chip}, que este firmware no admite. Comprueba que has seleccionado el dispositivo correcto.',
        downloading: 'Descargando el firmware…',
        downloadFailed: 'No se pudo descargar {url}. Comprueba tu conexión a internet.',
        downloadFailedStatus: 'No se pudo descargar {url} (HTTP {status}).',
        erasing: 'Borrando el dispositivo. Puede tardar un minuto…',
        installProgress: 'Instalando… {percent} %',
        restarting: 'Reiniciando el dispositivo…',
        complete: 'Instalación completada',
        completeText: '{label} está instalado. Tu dispositivo se está reiniciando.',
        failed: 'La instalación ha fallado',
        failedText: 'La instalación ha fallado: {message} Vuelve a conectar el dispositivo e inténtalo de nuevo.',
    },
    ja: {
        title: 'Tactility Webインストーラー',
        description: 'Tactilityオペレーティングシステムのためのウェブインストールツール',
        brandSub: 'Webインストーラー',
        language: '言語',
        otherInstallMethods: 'ほかのインストール方法',
        support: 'サポート',
        introTitle: 'デバイスにTactilityをインストール',
        introText: 'ESP32デバイスをUSBで接続し、リストから選んで、ブラウザーから直接書き込みます。',
        unsupportedBrowser: 'お使いのブラウザーはWeb Serialに対応していません。デスクトップ版のChrome、Edge、Operaを使うか、<a href="{url}">ほかのインストール方法</a>をご覧ください。',
        insecure: 'インストールは、このページをHTTPSまたはlocalhostで開いた場合のみ動作します。',
        chooseDevice: 'デバイスを選ぶ',
        searchPlaceholder: 'メーカー名や製品名で検索…',
        searchLabel: 'メーカー名や製品名でデバイスを検索',
        loadingDevices: 'デバイスを読み込んでいます…',
        pickVersion: 'バージョンを選んでインストール',
        selectDevice: '続けるにはデバイスを選んでください。',
        version: 'バージョン',
        versionStable: 'メイン',
        versionUnstable: 'ベータ',
        installNow: '今すぐインストール',
        betaOnly: 'ベータのみ',
        mainOnly: 'メインのみ',
        incubating: '開発中',
        noMatch: '「{query}」に一致するデバイスはありません。',
        deviceCount: '{count}台の対応デバイス',
        deviceCountFiltered: '{total}台中{count}台',
        unavailable: '利用不可',
        noBuild: 'このデバイス用の{version}ビルドはありません',
        builtOn: '{date}にコミット{commit}からビルド',
        incubatingNotice: 'このデバイスは開発中です。すべての機能が実装されているわけではありません！',
        staleMainNotice: '現在のメインビルドには、最新の機能や修正の多くが含まれていません。代わりにベータビルドのインストールをおすすめします。',
        staleMainConfirm: 'それでも古いメインビルドをインストールする',
        loadFailed: 'デバイス情報を取得できませんでした。',
        tryAgain: '再試行',
        installLabel: '{device}用のTactility {version}',
        openPortFailed: 'シリアルポートを開けませんでした：{message}',
        installTitle: 'Tactilityをインストール',
        installSummary: '選択したデバイスに{label}をインストールします。',
        eraseFirst: '先にデバイスを消去する',
        eraseHint: '初めてインストールするときにおすすめです。デバイス上のすべてのデータが削除されます。',
        cancel: 'キャンセル',
        install: 'インストール',
        installing: 'インストール中',
        keepConnected: 'デバイスを接続したまま、このページを開いておいてください。',
        close: '閉じる',
        log: 'ログ',
        preparing: '準備中…',
        connecting: 'デバイスに接続しています…',
        connectFailed: 'デバイスに接続できませんでした。ほかのプログラムが使用していないことを確認し、BOOTボタンを押しながらもう一度お試しください。',
        wrongChip: '接続されたデバイスのチップは{chip}で、このファームウェアには対応していません。正しいデバイスを選んだか確認してください。',
        downloading: 'ファームウェアをダウンロードしています…',
        downloadFailed: '{url}をダウンロードできませんでした。インターネット接続を確認してください。',
        downloadFailedStatus: '{url}をダウンロードできませんでした（HTTP {status}）。',
        erasing: 'デバイスを消去しています。1分ほどかかることがあります…',
        installProgress: 'インストール中… {percent}%',
        restarting: 'デバイスを再起動しています…',
        complete: 'インストール完了',
        completeText: '{label}をインストールしました。デバイスを再起動しています。',
        failed: 'インストールに失敗しました',
        failedText: 'インストールに失敗しました：{message} デバイスを接続し直して、もう一度お試しください。',
    },
    zh: {
        title: 'Tactility 网页安装器',
        description: 'Tactility 操作系统的网页安装工具',
        brandSub: '网页安装器',
        language: '语言',
        otherInstallMethods: '其他安装方式',
        support: '支持',
        introTitle: '在你的设备上安装 Tactility',
        introText: '通过 USB 连接你的 ESP32 设备，从列表中选择它，直接在浏览器中烧录。',
        unsupportedBrowser: '你的浏览器不支持 Web Serial。请使用桌面版 Chrome、Edge 或 Opera，或查看<a href="{url}">其他安装方式</a>。',
        insecure: '只有通过 HTTPS 或在 localhost 上打开此页面时才能安装。',
        chooseDevice: '选择你的设备',
        searchPlaceholder: '按品牌或名称搜索…',
        searchLabel: '按品牌或名称搜索设备',
        loadingDevices: '正在加载设备…',
        pickVersion: '选择版本并安装',
        selectDevice: '请选择一个设备以继续。',
        version: '版本',
        versionStable: '正式版',
        versionUnstable: '测试版',
        installNow: '立即安装',
        betaOnly: '仅测试版',
        mainOnly: '仅正式版',
        incubating: '开发中',
        noMatch: '没有与“{query}”匹配的设备。',
        deviceCount: '支持 {count} 款设备',
        deviceCountFiltered: '{count} / {total} 款设备',
        unavailable: '不可用',
        noBuild: '此设备没有{version}构建',
        builtOn: '构建于 {date}，提交 {commit}',
        incubatingNotice: '此设备仍在开发中，功能尚未完全实现！',
        staleMainNotice: '正式版目前缺少许多最新功能和修复。建议改为安装测试版。',
        staleMainConfirm: '仍然安装旧的正式版',
        loadFailed: '无法获取设备信息。',
        tryAgain: '重试',
        installLabel: '适用于 {device} 的 Tactility {version}',
        openPortFailed: '无法打开串口：{message}',
        installTitle: '安装 Tactility',
        installSummary: '将在你选择的设备上安装{label}。',
        eraseFirst: '先擦除设备',
        eraseHint: '首次安装时推荐。会删除设备上的所有数据。',
        cancel: '取消',
        install: '安装',
        installing: '正在安装',
        keepConnected: '请保持设备连接，不要关闭此页面。',
        close: '关闭',
        log: '日志',
        preparing: '正在准备…',
        connecting: '正在连接设备…',
        connectFailed: '无法连接设备。请确认没有其他程序正在使用它，然后按住 BOOT 键重试。',
        wrongChip: '连接的设备使用 {chip} 芯片，此固件不支持。请检查是否选择了正确的设备。',
        downloading: '正在下载固件…',
        downloadFailed: '无法下载 {url}。请检查网络连接。',
        downloadFailedStatus: '无法下载 {url}（HTTP {status}）。',
        erasing: '正在擦除设备，可能需要一分钟…',
        installProgress: '正在安装… {percent}%',
        restarting: '正在重启设备…',
        complete: '安装完成',
        completeText: '{label}已安装，设备正在重启。',
        failed: '安装失败',
        failedText: '安装失败：{message} 请重新连接设备后重试。',
    },
};

function isAvailable(code) {
    return LANGUAGES.some((language) => language.code === code);
}

/** "de-AT" -> "de", or null when the site has no such language */
function toAvailable(tag) {
    const code = String(tag || '').toLowerCase().split('-')[0];
    return isAvailable(code) ? code : null;
}

function getStoredLanguage() {
    try {
        return toAvailable(localStorage.getItem(STORAGE_KEY));
    } catch (error) {
        return null;
    }
}

function detectLanguage() {
    const fromUrl = toAvailable(new URLSearchParams(location.search).get('lang'));
    if (fromUrl) {
        return fromUrl;
    }
    const stored = getStoredLanguage();
    if (stored) {
        return stored;
    }
    for (const tag of navigator.languages || [navigator.language]) {
        const code = toAvailable(tag);
        if (code) {
            return code;
        }
    }
    return 'en';
}

let current = detectLanguage();

export function getLanguage() {
    return current;
}

/** Locale for formatting dates and numbers, e.g. "zh-CN" */
export function getLocale() {
    return LANGUAGES.find((language) => language.code === current).htmlLang;
}

export function t(key, values = {}) {
    const text = STRINGS[current][key] ?? STRINGS.en[key] ?? key;
    return text.replace(/\{(\w+)\}/g, (match, name) => (name in values ? String(values[name]) : match));
}

/** A page of tactilityproject.org in the current language, e.g. websiteUrl("/installing/") */
export function websiteUrl(path) {
    return current === 'en' ? `${WEBSITE}${path}` : `${WEBSITE}/${current}${path}`;
}

/**
 * Translate the static page: elements with data-i18n (text), data-i18n-html (markup with an {url}
 * from data-i18n-url), data-i18n-placeholder and data-i18n-aria-label, and links with data-website-path.
 */
export function translatePage() {
    document.documentElement.lang = getLocale();
    document.title = t('title');
    document.querySelector('meta[name="description"]').content = t('description');
    for (const element of document.querySelectorAll('[data-i18n]')) {
        element.textContent = t(element.dataset.i18n);
    }
    for (const element of document.querySelectorAll('[data-i18n-html]')) {
        element.innerHTML = t(element.dataset.i18nHtml, { url: websiteUrl(element.dataset.i18nUrl || '/') });
    }
    for (const element of document.querySelectorAll('[data-i18n-placeholder]')) {
        element.placeholder = t(element.dataset.i18nPlaceholder);
    }
    for (const element of document.querySelectorAll('[data-i18n-aria-label]')) {
        element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
    }
    for (const link of document.querySelectorAll('[data-website-path]')) {
        link.href = websiteUrl(link.dataset.websitePath);
    }
}

/** Fill the language menu and switch languages when the visitor picks one. */
export function initLanguageMenu(select, onChange) {
    for (const language of LANGUAGES) {
        const option = document.createElement('option');
        option.value = language.code;
        option.lang = language.htmlLang;
        option.textContent = language.name;
        select.append(option);
    }
    select.value = current;
    select.addEventListener('change', () => {
        current = select.value;
        try {
            localStorage.setItem(STORAGE_KEY, current);
        } catch (error) {
            // Not remembered, e.g. in a private window
        }
        // Drop ?lang=, so a reload keeps the language that was picked
        const url = new URL(location.href);
        if (url.searchParams.has('lang')) {
            url.searchParams.delete('lang');
            history.replaceState(null, '', url);
        }
        translatePage();
        onChange();
    });
}
