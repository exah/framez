import { identity } from '../utils/fn'
import nextUnit from '../utils/next-unit'

const unit = (start, end, callback = identity) => {
  const next = nextUnit(start, end)
  return (res) => ({
    ...res,
    value: callback(next(res.progress))
  })
}

export default unit
