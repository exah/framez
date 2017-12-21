import { identity } from '../utils/fn'
import nextObject from '../utils/next-object'

const updateObject = (start, end, callback = identity) => {
  let next = null
  return (state) => {
    next = state.isStart ? nextObject(start, end) : next
    return {
      ...state,
      value: callback(next(state.progress))
    }
  }
}

export default updateObject
