import { isNum, isNil } from '../utils/is'

const DEFAULTS = {
  duration: 500,
  lastFrame: (1000 / 60),
  direction: 'normal',
  maxProgress: 1,
  loop: false
}

function withTime (optsOrDuration) {
  const opts = {
    ...DEFAULTS,
    ...(isNum(optsOrDuration) ? { duration: optsOrDuration } : optsOrDuration)
  }
  const { duration, lastFrame, direction, loop, maxProgress } = opts
  const maxIterations = opts.iterations || (
    loop ? Infinity : direction === 'alternate' ? 2 : 1
  )
  const adjustProgress = (progress, isReversed) => (
    isReversed ? maxProgress - progress : progress
  )

  return (res, now, { play, stop }) => {
    res.iteration = res.iteration || 0

    if (res.isEnd) {
      res.start = null
      res.end = null

      const nextIteration = (res.iteration + 1)
      if (nextIteration >= maxIterations) {
        stop()
        return res
      } else {
        res.iteration = nextIteration
        res.isEnd = false
        res.start = now
        res.end = (now + duration)
        play()
        return res
      }
    }

    const isStart = (isNil(res.start) || isNil(res.end))
    if (isStart) {
      res.start = now
      res.end = (now + duration)
    }

    const isReversed = (
      res._isReversed ||
      (direction === 'reverse') ||
      (direction === 'alternate' && res.iteration % 2 !== 0)
    )

    const elapsed = (now - res.start)
    const remain = (res.end - now)
    const progress = (elapsed / duration) * maxProgress
    const isEnd = (remain < lastFrame)

    play()
    return {
      ...res,
      progress: adjustProgress(isEnd ? maxProgress : progress, isReversed),
      elapsed: isEnd ? duration : elapsed,
      remain: isEnd ? 0 : remain,
      duration,
      isReversed,
      isStart,
      isEnd
    }
  }
}

export default withTime
