import { deferredPromise } from './utils'

function engine (onTick, duration = 500) {
  const started = deferredPromise()
  const finished = deferredPromise()

  let frame = null
  let start = null
  let end = null

  function pause () {
    window.cancelAnimationFrame(frame)
    frame = null
  }

  function stop () {
    pause()
    finished.resolve()
    start = null
    end = null
  }

  function play () {
    frame = window.requestAnimationFrame(tick)
  }

  function tick (now) {
    const isStart = (start == null || end == null)

    if (isStart) {
      start = now
      end = now + duration
      started.resolve()
    }

    const elapsed = now - start
    const remain = end - now
    const progress = elapsed / duration
    const isEnd = (remain < (1000 / 60))

    onTick(
      isEnd !== true
        ? { elapsed, remain, duration, progress, isStart, isEnd }
        : { elapsed: duration, remain: 0, duration, progress: 1, isStart, isEnd }
    )

    isEnd ? stop() : play()
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
