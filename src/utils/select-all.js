//
// Get NodeList by selector and convert it to array
//

const selectAll = (target) => typeof target === 'string'
  ? [ ...document.querySelectorAll(target) ]
  : typeof target === 'object' && target.length > 0
    ? [ ...target ]
    : []

export default selectAll
