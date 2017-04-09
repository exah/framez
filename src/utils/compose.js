//
// Compose muliple function into one and execute them consistently
// with result value of previous function
//

const compose = (fns) => (initial) => fns.reduce((value, fn) => fn(value), initial)

export default compose