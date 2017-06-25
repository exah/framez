import { isFn } from '../../../utils/is'
import nextStyles from '../../../utils/next-styles'

var updateStyles = function ($target, props) {
  var next
  return function (res) {
    if (res.isStart || !isFn(next)) {
      next = nextStyles($target, props)
    }

    return Object.assign({}, res,
      {updateStyles: next(res.progress)})
  }
}

export default updateStyles
