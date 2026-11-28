const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack');
const languages = require('./src/languages.json');

const CDN_ORIGIN = 'https://cdn.tactilityproject.org';
const SITE_URL = 'https://install.tactilityproject.org';

// English is at "/", the other languages at their own path, e.g. /de/ (see src/i18n.js)
const pagePath = (code) => (code === 'en' ? '/' : `/${code}/`);

// The CDN only allows CORS from the production origin, so the dev server
// proxies /firmware and the app uses same-origin URLs while serving.
module.exports = (env = {}) => ({
  entry: './src/main.js',
  mode: env.WEBPACK_SERVE ? 'development' : 'production',
  devtool: env.WEBPACK_SERVE ? 'inline-source-map' : 'source-map',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    // Absolute, because the same page is also served from the language paths, e.g. /de/
    publicPath: '/',
    clean: true,
    assetModuleFilename: 'assets/images/[name][ext]'
  },
  devServer: {
    compress: false,
    port: 8080,
    proxy: [
      {
        context: ['/firmware'],
        target: CDN_ORIGIN,
        changeOrigin: true,
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      CDN_BASE_URL: JSON.stringify(env.WEBPACK_SERVE ? '' : CDN_ORIGIN),
    }),
    // One page per language, with its metadata in the HTML for search engines and link previews
    ...languages.map((language) => new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: `${pagePath(language.code).slice(1)}index.html`,
      templateParameters: { language, languages, pagePath, siteUrl: SITE_URL },
    })),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
});
