//
// Compose muliple function into one and execute them consistently
// with result value of previous function
//

export const compose = (fns) => (initial) => fns.reduce((value, fn) => fn(value), initial)
