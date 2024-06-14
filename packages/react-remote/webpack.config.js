const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3012,
  },
  output: {
    publicPath: 'auto',
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
    buildDependencies: {
      config: [__filename],
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './RemotePage': './src/bootstraps/RemotePageRoot',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: false,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
          eager: false,
        },
      },
    }),
  ],
};
