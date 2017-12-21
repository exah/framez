import { animate, withEase, withTime } from '../core'
import { updateScroll } from '../actions'
import { isNum } from '../utils/is'

const jump = (target, optsOrTime = {}) => {
  const { duration, easing, offset } = (
    isNum(optsOrTime)
      ? { duration: optsOrTime }
      : optsOrTime
  )

  return animate(
    withTime(duration),
    withEase(easing),
    updateScroll(target, offset)
  ).start()
}

export default jump
