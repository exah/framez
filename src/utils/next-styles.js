import { isArr, isNil, isFn } from './is'
import { getStyle, setStyle } from './styles'
import nextUnit from './next-unit'
import select from './select'

//
// Update dom elements styles
//

const nextStyle = ($el, props) => {
  const next = Object.keys(props).map((propName) => {
    const val = props[propName]

    if (isFn(val)) {
      return (progress, realProgress) => setStyle(
        $el,
        propName,
        val({ progress, realProgress }, $el)
      )
    }

    const [ startVal, endVal ] = isArr(val) ? val : [ getStyle($el, propName), val ]

    if (isNil(startVal) || isNil(endVal)) {
      throw new Error("Can't get style value, please use array `[ from, to ]`")
    }

    const nextVal = nextUnit(startVal, endVal)
    return (progress) => setStyle($el, propName, nextVal(progress))
  })
  return (...args) => next.map((fn) => fn(...args))
}

const nextStyles = (targetOrSelector, props) => {
  const $targets = select(targetOrSelector)
  const next = $targets.map(($el) => nextStyle($el, props))
  return (...args) => next.map(fn => fn(...args))
}

export default nextStyles
