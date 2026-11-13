const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack');

const CDN_ORIGIN = 'https://cdn.tactilityproject.org';

// The CDN only allows CORS from the production origin, so the dev server
// proxies /firmware and the app uses same-origin URLs while serving.
module.exports = (env = {}) => ({
  entry: './src/main.js',
  mode: env.WEBPACK_SERVE ? 'development' : 'production',
  devtool: env.WEBPACK_SERVE ? 'inline-source-map' : 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
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
