const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'main.js': './src/main.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'dist/assets/scripts/'
  },
  devtool: 'cheap-source-map'
  
};