import compose from './utils/compose'
import engine from './engine'

function animate (...handlers) {
  const runner = engine(compose(handlers))

  runner.play()
  return runner
}

export default animate
