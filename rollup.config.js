import buble from 'rollup-plugin-buble'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

const bubleConfig = {
  objectAssign: 'Object.assign'
}

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'A',
  plugins: [
    json(),
    resolve(),
    buble(bubleConfig),
    uglify()
  ],
  sourceMap: true,
  dest: 'dist/A.js'
}
