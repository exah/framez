import deferredPromise from '../../utils/deferred-promise'

function engine (onTick) {
  var frame = null
  var started = deferredPromise()
  var finished = deferredPromise()

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
    onTick({ now: now, play: play, pause: pause, stop: stop, started: started, finished: finished })
  }

  return {
    play: play,
    stop: stop,
    pause: pause,
    started: started.promise,
    finished: finished.promise
  }
}

export default engine
