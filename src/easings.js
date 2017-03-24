// Copy-pasted from https://gist.github.com/gre/1650294

export const easeInQuad = (t) => t * t
// decelerating to zero velocity
export const easeOutQuad = (t) => t * (2 - t)
// acceleration until halfway, then deceleration
export const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + ((4 - (2 * t)) * t)
// accelerating from zero velocity
export const easeInCubic = (t) => t * t * t
// decelerating to zero velocity
export const easeOutCubic = (t) => ((--t) * (t * t)) + 1
// acceleration until halfway, then deceleration
export const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : ((t - 1) * ((2 * t) - 2) * ((2 * t) - 2)) + 1
// accelerating from zero velocity
export const easeInQuart = (t) => t * t * t * t
// decelerating to zero velocity
export const easeOutQuart = (t) => (1 - (--t)) * (t * (t * t))
// acceleration until halfway, then deceleration
export const easeInOutQuart = (t) => t < 0.5 ? 8 * t * t * t * t : 1 - (8 * (--t) * t * t * t)
// accelerating from zero velocity
export const easeInQuint = (t) => t * t * t * t * t
// decelerating to zero velocity
export const easeOutQuint = (t) => 1 + ((--t) * t * t * t * t)
// acceleration until halfway, then deceleration
export const easeInOutQuint = (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 + (16 * (--t) * t * t * t * t)

export const easeInSin = (t) => 1 + Math.sin((Math.PI / 2 * t) - (Math.PI / 2))
export const easeOutSin = (t) => Math.sin(Math.PI / 2 * t)
export const easeInOutSin = (t) => (1 + Math.sin((Math.PI * t) - (Math.PI / 2))) / 2

// Elastic easing
export const elasticIn = (power) => (t) => (
  t === 0 || t === 1
    ? t
    : -Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (power / (Math.PI * 2) * Math.asin(1))) * (Math.PI * 2)) / power)
)
export const elasticOut = (power) => (t) => 1 - elasticIn(power)(1 - t)
export const elasticInOut = (power) => (t) => (
  t < 0.5
    ? elasticIn(power)(t * 2) / 2
    : 1 - (elasticIn(power)((t * -2) + 2) / 2)
)
