var path = require('path');

module.exports = {
  devtool: 'sourcemap',
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './'),
    publicPath: './'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, './')
        ],
        exclude: [
          path.join(__dirname, './node_modules')
        ],
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },

  plugins: []
};
