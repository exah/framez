//
// camelCase to kebab-case
//

const kebab = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

export default kebab
