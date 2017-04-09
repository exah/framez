import elasticIn from './elastic-in'

const elasticInOut = (power) =>
  (t) =>
    (t < 0.5)
      ? elasticIn(power)(t * 2) / 2
      : 1 - (elasticIn(power)((t * -2) + 2) / 2)

export default elasticInOut
