function duration (time = 500) {
  let start = null
  let end = null

  return (args) => {
    const { now, play, stop, started } = args

    const isStart = (start == null || end == null)
    if (isStart) {
      start = now
      end = now + time
      started.resolve()
    }

    const elapsed = now - start
    const remain = end - now
    const progress = elapsed / time

    const isEnd = (remain < (1000 / 60))
    if (isEnd) {
      start = null
      end = null

      stop()
      return {
        elapsed: time,
        remain: 0,
        progress: 1,
        duration: time,
        isStart,
        isEnd,
        ...args
      }
    }

    play()
    return {
      elapsed,
      remain,
      progress,
      duration: time,
      isStart,
      isEnd,
      ...args
    }
  }
}

export default duration
