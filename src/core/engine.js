import deferredPromise from '../utils/deferred-promise'

function engine (onTick) {
  let frame = null
  let state = {}
  let finished = deferredPromise()

  const instance = {
    play,
    stop,
    start,
    reverse,
    pause,
    get state () { return state },
    get frame () { return frame },
    get finished () { return finished.promise },
    then: (fn) => instance.finished.then(fn),
    catch: (fn) => instance.finished.catch(fn)
  }

  function tick (now) {
    try {
      state = onTick(state, now, instance)
    } catch (error) {
      finished.reject(error)
      state = {}
      pause()
    }
  }

  function pause () {
    window.cancelAnimationFrame(frame)
    frame = null
    return instance
  }

  function play () {
    frame = window.requestAnimationFrame(tick)
    return instance
  }

  function reverse () {
    return start(true)
  }

  function stop () {
    finished.resolve(state)
    state = {}
    return pause()
  }

  function start (_isReversed) {
    state = { _isReversed }
    finished = deferredPromise()
    return play()
  }

  return instance
}

export default engine
