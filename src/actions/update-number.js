import { identity } from '../utils/fn'
import nextNumber from '../utils/next-number'

const updateNumber = (start, end, callback = identity) => (state) => ({
  ...state,
  value: callback(nextNumber(start, end, state.progress))
})

export default updateNumber
