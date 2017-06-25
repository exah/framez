import { isNum } from '../../utils/is'

var DEFAULT_OPTS = {
  duration: 500,
  lastFrame: (1000 / 60),
  direction: 'normal',
  loop: false
}

var MAX_PROGRESS = 1

function withTime (optsOrDuration) {
  if (optsOrDuration === void 0) optsOrDuration = {}

  var opts = Object.assign({}, DEFAULT_OPTS,
    (isNum(optsOrDuration) ? { duration: optsOrDuration } : optsOrDuration))
  var duration = opts.duration
  var lastFrame = opts.lastFrame
  var direction = opts.direction
  var loop = opts.loop
  var maxIterations = opts.iterations || (loop ? Infinity : direction === 'alternate' ? 2 : 1)

  var iteration = 0
  var start = null
  var end = null

  var adjustProgress = function (progress, isReversed) {
    return (
    isReversed ? MAX_PROGRESS - progress : progress
    )
  }

  return function (result) {
    if (result === void 0) result = {}

    var now = result.now
    var play = result.play
    var stop = result.stop
    var started = result.started

    var isStart = (start == null || end == null)
    if (isStart) {
      start = now
      end = (now + duration)
      started.resolve()
    }

    var isReversed = (
      (direction === 'reverse') ||
      (direction === 'alternate' && iteration % 2 !== 0)
    )
    var elapsed = (now - start)
    var remain = (end - now)
    var progress = (elapsed / duration)

    var isEnd = (remain < lastFrame)
    if (isEnd) {
      start = null
      end = null

      var nextIteration = (iteration + 1)
      if (nextIteration < maxIterations) {
        iteration = nextIteration
        play()
      } else {
        iteration = 0
        stop()
      }

      return Object.assign({}, {elapsed: duration,
        remain: 0,
        progress: adjustProgress(MAX_PROGRESS, isReversed),
        duration: duration,
        isReversed: isReversed,
        isStart: isStart,
        isEnd: isEnd},
        result)
    }

    play()
    return Object.assign({}, {progress: adjustProgress(progress, isReversed),
      elapsed: elapsed,
      remain: remain,
      duration: duration,
      isReversed: isReversed,
      isStart: isStart,
      isEnd: isEnd},
      result)
  }
}

export default withTime
