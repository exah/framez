function animate (...handlers) {
  const { requestAnimationFrame, cancelAnimationFrame } = window

  const duration = typeof handlers[handlers.length - 1] === 'function' ? 500 : handlers.pop()
  const handler = initial => handlers.reduce((res, next) => next(res), initial)

  let resolveFinished
  const finished = new Promise(resolve => { resolveFinished = resolve })

  let frame = null
  let start = null
  let end = null

  function pause () {
    cancelAnimationFrame(frame)
    frame = null
  }

  function stop () {
    pause()
    start = null
    end = null
  }

  function play () {
    frame = requestAnimationFrame(tick)
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

    if (remain < 60 || res === false) {
      handler({ elapsed: duration, remain: 0, duration, progress: 1 })
      stop()
      resolveFinished()
      return
    }
    play()
  }
  play()

  return {
    play,
    pause,
    stop,
    finished
  }
}

export default animate
