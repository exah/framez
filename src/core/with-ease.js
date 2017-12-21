import { identity } from '../utils/fn'

const withEase = (fn = identity) => (state) => ({
  ...state,
  progress: fn(state.progress)
})

export default withEase
