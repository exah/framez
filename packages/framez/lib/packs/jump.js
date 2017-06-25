import { animate, withEase, withTime } from 'framez-core'
import { scroll } from '../actions'
import { isNum } from '../../../utils/is'

var jump = function (target, optsOrTime) {
  if (optsOrTime === void 0) optsOrTime = {}

  var ref = (
    isNum(optsOrTime)
      ? { duration: optsOrTime }
      : optsOrTime
  )
  var duration = ref.duration
  var easing = ref.easing
  var offset = ref.offset

  return animate(
    withTime(duration),
    withEase(easing),
    scroll(target, offset)
  )
}

export default jump
