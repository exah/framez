import { deferredPromise } from '../utils/deferred-promise'

function engine (onTick) {
  let frame = null
  const started = deferredPromise()
  const finished = deferredPromise()

  function pause () {
    window.cancelAnimationFrame(frame)
    frame = null
  }

  function stop () {
    pause()
    finished.resolve()
  }

  function play () {
    frame = window.requestAnimationFrame(tick)
  }

  function tick (now) {
    onTick({ now, play, pause, stop, started, finished })
  }

  return {
    play,
    stop,
    pause,
    started: started.promise,
    finished: finished.promise
  }
}

export default engine
