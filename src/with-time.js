import { isNum } from './utils/is'

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

  let iteration = 0
  let start = null
  let end = null

  const adjustProgress = (progress, isReversed) => (
    isReversed ? MAX_PROGRESS - progress : progress
  )

  return (result = {}) => {
    const { now, play, stop, started } = result

    const isStart = (start == null || end == null)
    if (isStart) {
      start = now
      end = (now + duration)
      started.resolve()
    }

    const isReversed = (
      (direction === 'reverse') ||
      (direction === 'alternate' && iteration % 2 !== 0)
    )
    const elapsed = (now - start)
    const remain = (end - now)
    const progress = (elapsed / duration)

    const isEnd = (remain < lastFrame)
    if (isEnd) {
      start = null
      end = null

      const nextIteration = (iteration + 1)
      if (nextIteration < maxIterations) {
        iteration = nextIteration
        play()
      } else {
        iteration = 0
        stop()
      }

      return {
        elapsed: duration,
        remain: 0,
        progress: adjustProgress(MAX_PROGRESS, isReversed),
        duration,
        isReversed,
        isStart,
        isEnd,
        ...result
      }
    }

    play()
    return {
      progress: adjustProgress(progress, isReversed),
      elapsed,
      remain,
      duration,
      isReversed,
      isStart,
      isEnd,
      ...result
    }
  }
}

export default withTime
