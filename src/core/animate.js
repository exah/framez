import engine from './engine'
import { pipe } from '../utils/fn'

function animate (...handlers) {
  const instance = engine(pipe(...handlers))
  return Object.assign(instance.start, instance)
}

export default animate
