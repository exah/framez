import nextObject from '../../../utils/next-object'

// Every animation tick create new object
var newObject = function (start, end) {
  var next = nextObject(start, end)
  return function (res) {
    return (Object.assign({}, res,
    {object: Object.assign({}, start, next(res.progress))}))
  }
}

export default newObject
