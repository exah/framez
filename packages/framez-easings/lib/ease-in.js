var easeIn = function (power) {
  if (power === void 0) power = 2

  return function (t) { return Math.pow(t, power) }
}

export default easeIn
