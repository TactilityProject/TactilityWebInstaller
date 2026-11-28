const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack');
const languages = require('./src/languages.json');

const CDN_ORIGIN = 'https://cdn.tactilityproject.org';

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
    // English is at "/", the other languages at their own path, e.g. /de/ (see src/i18n.js)
    ...languages.map(({ code }) => (code === 'en' ? 'index.html' : `${code}/index.html`)).map((filename) => new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename,
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
