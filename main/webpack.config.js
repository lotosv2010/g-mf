const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    port: 3010,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      filename: 'remoteEntry.js',
      name: 'main',
      remotes: {
        remote: 'remote@http://localhost:3001/remoteEntry.js',
        host: 'host@http://localhost:3000/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' }
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
}; 