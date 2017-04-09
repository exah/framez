import kebab from './kebab'

const getStyle = (el, prop) => {
  if (prop in el.style) {
    return window.getComputedStyle(el)[kebab(prop)] || 0
  }
}

export default getStyle
