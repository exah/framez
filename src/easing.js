// Copy-pasted from comments
// https://gist.github.com/gre/1650294

export const powerEaseIn = (power) => (t) => Math.pow(t, power)
export const powerEaseOut = (power) => (t) => 1 - Math.abs(Math.pow(t - 1, power))
export const powerEaseInOut = (power) => (t) => (
  t < 0.5
    ? powerEaseIn(power)(t * 2) / 2
    : powerEaseOut(power)(t * 2 - 1) / 2 + 0.5
)

export const easeInQuad = powerEaseIn(2)
export const easeOutQuad = powerEaseOut(2)
export const easeInOutQuad = powerEaseInOut(2)
export const easeInCubic = powerEaseIn(3)
export const easeOutCubic = powerEaseOut(3)
export const easeInOutCubic = powerEaseInOut(3)
export const easeInQuart = powerEaseIn(4)
export const easeOutQuart = powerEaseOut(4)
export const easeInOutQuart = powerEaseInOut(4)
export const easeInQuint = powerEaseIn(5)
export const easeOutQuint = powerEaseOut(5)
export const easeInOutQuint = powerEaseInOut(5)
export const easeInSin = (t) => 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2)
export const easeOutSin = (t) => Math.sin(Math.PI / 2 * t)
export const easeInOutSin = (t) => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2

export const elastic = (power) => (t) => (
  t === 0 || t === 1
    ? t
    : -Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (power / (Math.PI * 2) * Math.asin(1))) * (Math.PI * 2)) / power)
)
export const elasticOut = (power) => (t) => 1 - elastic(power)(1 - t)
export const elasticInOut = (power) => (t) => t < 0.5 ? elastic(power)(t * 2) / 2 : 1 - elastic(power)(t * -2 + 2) / 2
