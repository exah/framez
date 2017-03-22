const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    animate: './animate.js',
    easings: './easings.js',
    handlers: './handlers.js'
  },
  output: {
    filename: '[name].js',
    library: 'fpa',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
