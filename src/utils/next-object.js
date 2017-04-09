import nextUnit from './next-unit'

//
// Get next object with progress and nextUnit
//

const nextObject = (start, end) => {
  const keys = Object.keys(end)

  const next = keys.reduce((obj, key) => {
    obj[key] = nextUnit(start[key], end[key])
    return obj
  }, {})

  return (progress) => keys.reduce((obj, key) => {
    obj[key] = next[key](progress)
    return obj
  }, {})
}

export default nextObject
