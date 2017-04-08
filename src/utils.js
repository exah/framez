import { select, getStyle, setStyle } from './dom'

//
// Deferred promise
//

export const deferredPromise = () => {
  const result = {}
  result.promise = new Promise((resolve, reject) => {
    result.resolve = resolve
    result.reject = reject
  })
  return result
}

//
// Compose muliple function into one and execute them consistently
// with result value of previous function
//

export const compose = (fns) => (initial) => fns.reduce((value, fn) => fn(value), initial)

//
// camelCase to kebab-case
//

export const kebab = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

//
// Get next number by progress value
//

export const nextNumber = (start, end, progress) => (((end - start) * progress) + start)

//
// Parse number with unit
// 50px -> [ 50, 'px' ]
//

export const getNumber = (str) => parseFloat(str, 10)
export const getUnit = (str) => String(str).replace(/([0-9]|\.|,)+([\S]+)?/, '$2').trim()

//
// Get next unit number with nextNumber
//

export const nextUnit = (startUnit, endUnit) => {
  const unit = getUnit(startUnit) || getUnit(endUnit) || 0
  const start = getNumber(startUnit)
  const end = getNumber(endUnit)

  return (progress) => nextNumber(start, end, progress) + unit
}

//
// Get next object with progress and nextUnit
//

export const nextObject = (start, end) => {
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

//
// Update dom element styles with progress and nextUnit
//

export const updateStyles = (target, props) => {
  const $el = select(target)
  if ($el == null) throw new Error('target not Element in DOM')

  const keys = Object.keys(props)
  const next = keys.reduce((obj, prop) => {
    obj[prop] = nextUnit(getStyle($el, prop), props[prop])
    return obj
  }, {})

  return (progress) => {
    keys.forEach((prop) => setStyle($el, prop, next[prop](progress)))
    return $el
  }
}
