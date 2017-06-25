import elasticIn from './elastic-in'

var elasticInOut = function (power) {
  return function (t) {
    return (t < 0.5)
      ? elasticIn(power)(t * 2) / 2
      : 1 - (elasticIn(power)((t * -2) + 2) / 2)
  }
}

export default elasticInOut
