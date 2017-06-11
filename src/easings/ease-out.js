const easeOut = (power = 2) => (t) => 1 - Math.abs(Math.pow(t - 1, power))

export default easeOut
