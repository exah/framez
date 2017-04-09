const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './src/index.js',
    animate: './src/animate.js',
    timing: './src/timing/index.js',
    handlers: './src/handlers.js'
  },
  output: {
    filename: '[name].js',
    library: 'A',
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
