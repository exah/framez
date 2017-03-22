import engine from './engine'

function animate (...handlers) {
  const handler = (initial) => handlers.reduce((res, next) => next(res), initial)

  return function (duration) {
    const runner = engine(handler, duration)

    runner.play()
    return runner
  }
}

export default animate
