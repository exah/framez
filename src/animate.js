import engine from './engine'
import compose from './utils/compose'

function animate (...handlers) {
  const handler = compose(handlers)

  return function (duration) {
    const runner = engine(handler, duration)

    runner.play()
    return runner
  }
}

export default animate
