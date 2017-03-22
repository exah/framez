function engine (handler, duration = 500) {
  let frame = null
  let start = null
  let end = null

  let resolveFinished
  const finished = new Promise((resolve) => { resolveFinished = resolve })

  function pause () {
    window.cancelAnimationFrame(frame)
    frame = null
  }

  function stop () {
    pause()
    start = null
    end = null
  }

  function play () {
    frame = window.requestAnimationFrame(tick)
  }

  function tick (now) {
    if (start == null || end == null) {
      start = now
      end = now + duration
    }

    const elapsed = now - start
    const remain = end - now
    const progress = elapsed / duration
    const res = handler({ elapsed, remain, duration, progress })

    if (remain < (1000 / 60) || res === false) {
      handler({ elapsed: duration, remain: 0, duration, progress: 1 })
      stop()
      resolveFinished()
      return
    }
    play()
  }

  return { play, stop, pause, finished }
}

export default engine
