const trim = (string) => string.trim()

//
// (scale, [1, 2]) -> 'scale(1,2)'
//
export const formatAsFunction = (name, value) => `${name}(${value})`

//
// { scale: [.5], translate: ['30px', '10px'], ... }
// -> 'scale(.5) translate(30px,10px) ...'
//
export const objectToFunctions = (object) => Object.keys(object)
  .map((key) => formatAsFunction(key, object[key]))
  .join(' ')

//
// 'scale(.5) translate(30px, 10px) ...'
// -> { scale: [.5], translate: ['30px', '10px'], ... }
//
export const functionsToObject = (string) => string
  .replace(/[()]/g, '_')
  .split('_')
  .map(trim)
  .filter(v => v !== '')
  .reduce((resultObject, key, index, source) => {
    if ((index + 1) % 2 === 0) return resultObject
    resultObject[key] = source[index + 1].split(',').map(trim)
    return resultObject
  }, {})
