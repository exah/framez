//
// Pipe muliple function into one and execute them consistently
// with result value of previous function
//

const pipe = (fns) => initial => fns.reduce((value, fn) => fn(value), initial)

export default pipe
