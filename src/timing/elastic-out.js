import elasticIn from './elastic-in'

const elasticOut = (power) => (t) => 1 - elasticIn(power)(1 - t)

export default elasticOut
