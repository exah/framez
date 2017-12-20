import { identity } from '../utils/fn'
import nextObject from '../utils/next-object'

const updateObject = (start, end, callback = identity) => {
  let next = null
  return (res) => {
    next = res.isStart ? nextObject(start, end) : next
    return {
      ...res,
      value: callback(next(res.progress))
    }
  }
}

export default updateObject
