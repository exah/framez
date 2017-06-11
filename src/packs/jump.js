import animate from '../animate'
import duration from '../duration'
import scroll from '../scroll'
import withEase from '../with-ease'

const jump = (target, optionsOrDuration) => {
  const { duration: time, easing, offset } = (typeof optionsOrDuration === 'object')
    ? optionsOrDuration
    : { duration: optionsOrDuration }

  return animate(duration(time), withEase(easing), scroll(target, offset))
}

export default jump
