//
// Compose muliple function into one and execute them consistently
// with result value of previous function
//

export const compose = (fns) => (initial) => fns.reduce((value, fn) => fn(value), initial)

//
// Get next number by progress value
//

export const nextNumber = (start, end, progress) => ((end * progress) + start)

