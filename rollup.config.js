import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'A',
  plugins: [
    resolve(),
    babel(),
    uglify()
  ],
  sourceMap: true,
  dest: 'dist/A.js'
}
