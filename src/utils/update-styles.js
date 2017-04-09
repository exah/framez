import getStyle from './get-style'
import nextUnit from './next-unit'
import select from './select'
import setStyle from './set-style'

//
// Update dom element styles with progress and nextUnit
//

const updateStyles = (target, props) => {
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

export default updateStyles
