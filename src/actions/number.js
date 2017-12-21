import { identity } from '../utils/fn'
import nextNumber from '../utils/next-number'

const number = (start, end, callback = identity) => (state) => ({
  ...state,
  value: callback(nextNumber(start, end, state.progress))
})

export default number
