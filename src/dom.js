import { kebab } from './utils'

export const getStyle = (el, prop) => {
  if (prop in el.style) {
    return window.getComputedStyle(el)[kebab(prop)] || 0
  }
}

export const setStyle = (el, prop, value) => {
  el.style[prop] = value
}

export const select = (target) => typeof target === 'string'
  ? document.querySelector(target)
  : target instanceof window.Element
    ? target
    : null
