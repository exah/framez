//
// return DOM Element by selector
//

const select = (selectorOrElement) => typeof selectorOrElement === 'string'
  ? document.querySelector(selectorOrElement)
  : selectorOrElement instanceof window.Element
    ? selectorOrElement
    : null

export default select
