import { identity } from '../utils/fn'

const withEase = (fn = identity) => (res) => ({
  ...res,
  progress: fn(res.progress)
})

export default withEase
