const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
    animate: './src/animate.js',
    easing: './src/easing.js',
    handlers: './src/handlers.js'
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
