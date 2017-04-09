import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

const bubleConfig = {
  objectAssign: 'Object.assign'
}

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'A',
  plugins: [
    resolve(),
    buble(bubleConfig),
    uglify()
  ],
  sourceMap: true,
  dest: 'dist/A.js'
}
