export const T = () => true
export const F = () => false
export const noop = () => null
export const always = (val) => () => val
export const identity = (val) => val
export const log = (...args) => console.log(...args)

// curry(fn) -> x -> x(a, b) -> x(c) -> fn(a, b, c)
export const curry = (fn, ...args) => (
  args.length === fn.length
    ? fn(...args)
    : curry.bind(null, fn, ...args)
)

// pipe(a, b, c)(value) -> c(b(a(value))) -> value
export const pipe = (fns) => initial => fns.reduce((value, fn) => fn(value), initial)

// tap(fn, a) -> fn(a) -> a
export const tap = curry((fn, x) => {
  fn(x)
  return x
})
