import easeIn from './ease-in'
import easeOut from './ease-out'

const easeInOut = (power = 2) =>
  (t) => (t < 0.5)
    ? easeIn(power)(t * 2) / 2
    : (easeOut(power)((t * 2) - 1) / 2) + 0.5

export default easeInOut
