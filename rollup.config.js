import buble from 'rollup-plugin-buble'
import babili from 'rollup-plugin-babili'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'

const config = (input, file, name) => ({
  input,
  output: {
    file,
    name,
    format: 'umd',
    sourcemap: process.env.NODE_ENV !== 'production'
  },
  plugins: [
    json(),
    resolve(),
    buble({ objectAssign: 'Object.assign' }),
    babili({ comments: false })
  ]
})

export default [
  config('src/index.js', 'dist/index.umd.js', 'framez'),
  config('src/core/index.js', 'dist/core.umd.js', 'framezCore'),
  config('src/easings/index.js', 'dist/easings.umd.js', 'framezEasings')
]
