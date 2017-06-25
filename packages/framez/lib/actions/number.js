import nextNumber from '../../../utils/next-number'

var number = function (start, end) {
  return function (res) {
    return (Object.assign({}, res,
  {number: nextNumber(start, end, res.progress)}))
  }
}

export default number
