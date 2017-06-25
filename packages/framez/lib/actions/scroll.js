import nextNumber from '../../../utils/next-number'
import select from '../../../utils/select'
import { isNum } from '../../../utils/is'

function scroll (target, offset) {
  if (target === void 0) target = 0
  if (offset === void 0) offset = 0

  var start = 0
  var end = 0

  return function (res) {
    if (res.isStart) {
      var ref = select(target)
      var $el = ref[0]
      start = window.scrollY || window.pageYOffset
      end = isNum(target)
        ? target
        : $el == null
          ? 0
          : $el.getBoundingClientRect().top + start
    }

    var nextY = nextNumber(start, end, res.progress)
    window.scrollTo(0, nextY)
    return res
  }
}

export default scroll
