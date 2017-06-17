import { isArr } from './is'
import { getStyle, setStyle } from './styles'
import nextUnit from './next-unit'
import select from './select'

//
// Update dom elements styles
//

const nextStyle = ($el, props) => {
  const next = Object.keys(props).map((propName) => {
    const val = props[propName]
    const nextVal = nextUnit(
      ...(isArr(val) ? val : [ getStyle($el, propName), val ])
    )
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
