export const T = () => true
export const F = () => false
export const always = (val) => () => val
export const identity = (val) => val
export const log = (...args) => console.log(...args)
export const curry = (fn, ...args) => (
  args.length === fn.length
    ? fn(...args)
    : curry.bind(null, fn, ...args)
)
export const tap = curry((fn, x) => {
  fn(x)
  return x
})
