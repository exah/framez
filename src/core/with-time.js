import { isNum } from '../utils/is'

const DEFAULT_OPTS = {
  duration: 500,
  lastFrame: (1000 / 60),
  direction: 'normal',
  loop: false
}

const MAX_PROGRESS = 1

function withTime (optsOrDuration = {}) {
  const opts = {
    ...DEFAULT_OPTS,
    ...(isNum(optsOrDuration) ? { duration: optsOrDuration } : optsOrDuration)
  }
  const { duration, lastFrame, direction, loop } = opts
  const maxIterations = opts.iterations || (loop ? Infinity : direction === 'alternate' ? 2 : 1)

  const adjustProgress = (progress, isReversed) => (
    isReversed ? MAX_PROGRESS - progress : progress
  )

  return (res = {}) => {
    const { now, play, stop, started } = res
    res.iteration = res.iteration || 0

    const isStart = (res.start == null || res.end == null)
    if (isStart) {
      res.start = now
      res.end = (now + duration)
      started.resolve({ ...res })
    }

    const isReversed = (
      (direction === 'reverse') ||
      (direction === 'alternate' && res.iteration % 2 !== 0)
    )
    const elapsed = (now - res.start)
    const remain = (res.end - now)
    const progress = (elapsed / duration)

    const isEnd = (remain < lastFrame)
    if (isEnd) {
      res.start = null
      res.end = null

      const nextIteration = (res.iteration + 1)
      if (nextIteration < maxIterations) {
        res.iteration = nextIteration
        play()
      } else {
        res.iteration = 0
        stop()
      }

      return {
        ...res,
        progress: adjustProgress(MAX_PROGRESS, isReversed),
        elapsed: duration,
        remain: 0,
        duration,
        isReversed,
        isStart,
        isEnd
      }
    }

    play()
    return {
      ...res,
      progress: adjustProgress(progress, isReversed),
      elapsed,
      remain,
      duration,
      isReversed,
      isStart,
      isEnd
    }
  }
}

export default withTime
