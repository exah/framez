import core from './core'
import compose from './utils/compose'

function animate (...handlers) {
  const handler = compose(handlers)

  return function (duration) {
    const runner = core(handler, duration)

    runner.play()
    return runner
  }
}

export default animate
