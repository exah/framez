import nextUnit from '../../../utils/next-unit'

var unit = function (startUnit, endUnit) {
  var next = nextUnit(startUnit, endUnit)
  return function (res) {
    return (Object.assign({}, res,
    {unit: next(res.progress)}))
  }
}

export default unit
