const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const isProd = mode === 'production';
const src = 'src/';

module.exports = {
  mode,
  context: path.resolve(__dirname, `${src}`),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'composer.js',
    libraryTarget: 'this',
    library: ['myNamespace', 'composer'],
  },
  plugins: [
    !isProd &&
      new TerserPlugin({
        cache: true,
      }),
  ].filter(Boolean),
  module: {
    rules: [{ test: /\.jsx?$/, use: 'babel-loader' }],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    modules: ['node_modules', src],
    extensions: ['.webpack.js', '.js', '.json', '.jsx'],
  },
};
