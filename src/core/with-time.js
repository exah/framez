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

  return (state, now, { play, stop }) => {
    state.iteration = state.iteration || 0

    if (state.isEnd) {
      state.start = null
      state.end = null

      const nextIteration = (state.iteration + 1)
      if (nextIteration >= maxIterations) {
        stop()
        return state
      } else {
        state.iteration = nextIteration
        state.isEnd = false
        state.start = now
        state.end = (now + duration)
        play()
        return state
      }
    }

    const isStart = (isNil(state.start) || isNil(state.end))
    if (isStart) {
      state.start = now
      state.end = (now + duration)
    }

    const isReversed = (
      state._isReversed === true ||
      (direction === 'reverse') ||
      (direction === 'alternate' && state.iteration % 2 !== 0)
    )

    const elapsed = (now - state.start)
    const remain = (state.end - now)

    const nextProgress = (elapsed / duration) * maxProgress
    const isEnd = (remain < lastFrame)
    const progress = adjustProgress(isEnd ? maxProgress : nextProgress, isReversed)

    play()
    return {
      ...state,
      progress,
      realProgress: progress,
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
