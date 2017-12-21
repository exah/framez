import { identity } from '../utils/fn'

const withEase = (fn = identity) => (state) => ({
  ...state,
  progress: fn(state.realProgress)
})

export default withEase
