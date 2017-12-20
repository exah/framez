import { identity } from '../utils/fn'
import nextNumber from '../utils/next-number'

const number = (start, end, callback = identity) => (res) => ({
  ...res,
  value: callback(nextNumber(start, end, res.progress))
})

export default number
