import animate from '../animate'
import withTime from '../with-time'
import withEase from '../with-ease'
import scroll from '../actions/scroll'
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
