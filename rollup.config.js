import buble from 'rollup-plugin-buble'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'A',
  plugins: [
    json(),
    resolve(),
    buble({ objectAssign: 'Object.assign' }),
    uglify()
  ],
  sourceMap: true,
  dest: 'lib/A.umd.js'
}
