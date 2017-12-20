import deferredPromise from '../utils/deferred-promise'

function engine (onTick) {
  let frame = null
  let result = null
  let started = deferredPromise()
  let finished = deferredPromise()

  function pause () {
    window.cancelAnimationFrame(frame)
    frame = null
  }

  function stop () {
    pause()
    result = null
    finished.resolve()
  }

  function play () {
    frame = window.requestAnimationFrame(tick)
    return methods
  }

  function tick (now) {
    result = onTick({ ...result, now, play, pause, stop, started, finished })
  }

  function start () {
    started = deferredPromise()
    finished = deferredPromise()

    play()
    return methods
  }

  const methods = {
    play,
    stop,
    start,
    pause,
    get started () { return started.promise },
    get finished () { return finished.promise },
    then: (fn) => methods.finished.then(fn)
  }

  return Object.assign(start, methods)
}

export default engine
