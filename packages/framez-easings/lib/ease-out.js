var easeOut = function (power) {
  if (power === void 0) power = 2

  return function (t) { return 1 - Math.abs(Math.pow(t - 1, power)) }
}

export default easeOut
