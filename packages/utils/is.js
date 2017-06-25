import { curry } from './fn'

export const is = curry((C, val) => (
  val != null && (val.constructor === C || val instanceof C)
))

export const isFn = is(Function)
export const isNum = is(Number)
export const isStr = is(String)
export const isArr = is(Array)
export const isObj = (val) => !isArr(val) && is(Object, val)
export const isDomList = (val) => (
  [ window.NodeList, window.HTMLCollection ].some(c => is(c, val))
)

export default is
