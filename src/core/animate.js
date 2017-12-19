import engine from './engine'
import { pipe } from '../utils/fn'

function animate (...handlers) {
  return engine(pipe(handlers))
}

export default animate
