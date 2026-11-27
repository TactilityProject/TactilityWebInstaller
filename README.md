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

# Deployment

Pushing to `main` builds the site and deploys it to GitHub Pages with the
[Deploy workflow](.github/workflows/deploy.yml).

# License

[GNU General Public License Version 3](LICENSE.md)
