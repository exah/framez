import engine from './engine'
import { pipe } from '../utils/fn'

function animate (...handlers) {
  const runner = engine(pipe(handlers))

  runner.play()
  return runner
}

export default animate
