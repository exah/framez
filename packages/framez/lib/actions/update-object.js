import nextObject from '../../../utils/next-object'

var updateObject = function (start, end) {
  var next = nextObject(start, end)
  return function (res) {
    return (Object.assign({}, res,
    {object: Object.assign(start, next(res.progress))}))
  }
}

export default updateObject
