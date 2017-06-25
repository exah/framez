import elasticIn from './elastic-in'

var elasticOut = function (power) { return function (t) { return 1 - elasticIn(power)(1 - t) } }

export default elasticOut
