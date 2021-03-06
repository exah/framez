import { addUnit } from './unit'
import kebab from './kebab'

export const getStyle = (el, prop) => {
  if (prop in el.style) {
    return window.getComputedStyle(el)[kebab(prop)]
  }
}

export const setStyle = (el, prop, value) => {
  const nextValue = addUnit(prop, value)
  el.style[prop] = nextValue
  return nextValue
}

export const setStyles = (el, props) => Object.keys(props).forEach((key) => {
  setStyle(el, key, props[key])
})
