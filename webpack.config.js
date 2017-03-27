const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    animate: './animate.js',
    easings: './easings.js',
    handlers: './handlers.js'
  },
  output: {
    filename: '[name].js',
    library: 'ffffan',
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
  },
  plugins: [
    new UglifyJSPlugin({ sourceMap: true })
  ]
}
