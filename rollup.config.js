import buble from 'rollup-plugin-buble'
import babili from 'rollup-plugin-babili'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'

const config = (moduleDir, moduleName) => ({
  moduleName,
  entry: `packages/${moduleDir}/src/index.js`,
  dest: `packages/${moduleDir}/lib/index.umd.js`,
  format: 'umd',
  sourceMap: true,
  plugins: [
    json(),
    resolve(),
    buble({ objectAssign: 'Object.assign' }),
    babili({ comments: false })
  ]
})

export default [
  config('framez', 'framez'),
  config('framez-core', 'framez'),
  config('framez-easings', 'easings')
]
