import easeIn from './ease-in'
import easeOut from './ease-out'

var easeInOut = function (power) {
  return function (t) {
    return (t < 0.5)
    ? easeIn(power)(t * 2) / 2
    : (easeOut(power)((t * 2) - 1) / 2) + 0.5
  }
}

export default easeInOut
