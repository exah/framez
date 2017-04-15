import animate from '../animate'
import scroll from '../scroll'
import withEase from '../with-ease'

const jump = (target, optionsOrDuration) => {
  const { duration, easing, offset } = (typeof optionsOrDuration === 'object')
    ? optionsOrDuration
    : { duration: optionsOrDuration }

  return animate(withEase(easing), scroll(target, offset))(duration)
}

export default jump
