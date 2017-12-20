import { isArr, isNil } from './is'
import { getStyle, setStyle } from './styles'
import nextUnit from './next-unit'
import select from './select'

//
// Update dom elements styles
//

const nextStyle = ($el, props) => {
  const next = Object.keys(props).map((propName) => {
    const val = props[propName]
    let [ fromVal, toVal ] = isArr(val) ? val : [ getStyle($el, propName), val ]
    if (isNil(fromVal) || isNil(toVal)) {
      throw new Error("Can't get style value, please use array `[ from, to ]`")
    }
    const nextVal = nextUnit(fromVal, toVal)
    return (progress) => setStyle($el, propName, nextVal(progress))
  })
  return (progress) => next.map((fn) => fn(progress))
}

const nextStyles = (targetOrSelector, props) => {
  const $targets = select(targetOrSelector)
  const next = $targets.map(($el) => nextStyle($el, props))
  return (progress) => next.map(fn => fn(progress))
}

export default nextStyles
