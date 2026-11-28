# Tactility Web Installer

This is the website front-end to for flashing ESP32 devices with [Tactility](https://github.com/TactilityProject/Tactility).

# Development

Before you can build the project, make sure you:
- Installed NodeJS
- Run `npm install`

Continuous building with local web server:

```bash
npm run start -- --port 3000
```

Building static files into `dist/`:

```bash
npm run build
```

# Hiding devices

To keep devices off the website, add their identifiers to [src/hidden-devices.json](src/hidden-devices.json):

```json
["lilygo-tdeck", "m5stack-cores3"]
```

Hidden devices don't show up for any version, and links like `#lilygo-tdeck` won't select them.

# Translations

The installer is available in English, German, Spanish, Japanese and Simplified Chinese. All texts are in [src/i18n.js](src/i18n.js).

The language is picked in this order:
1. The `lang` query parameter, e.g. `https://install.tactilityproject.org/?lang=de#lilygo-tdeck`. The translated pages of tactilityproject.org link with it.
2. The language picked in the language menu (remembered in the browser).
3. The browser's preferred languages.
4. English.

Device warnings and notes come from the firmware index on the CDN and are not translated.

# Deployment

Pushing to `main` builds the site and deploys it to GitHub Pages with the
[Deploy workflow](.github/workflows/deploy.yml).

# License

[GNU General Public License Version 3](LICENSE.md)
