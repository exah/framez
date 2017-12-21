import { identity } from '../utils/fn'
import nextUnit from '../utils/next-unit'

const updateUnit = (start, end, callback = identity) => {
  const next = nextUnit(start, end)
  return (state) => ({
    ...state,
    value: callback(next(state.progress))
  })
}

export default updateUnit
