import { animate, withEase, withTime } from '../core'
import { scroll } from '../actions'
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
    scroll(target, offset)
  )
}

export default jump
