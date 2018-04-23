import nextNumber from '../utils/next-number'
import select from '../utils/select'
import { isNum, isNil } from '../utils/is'

function updateScroll (target = 0, offset = 0) {
  let start = 0
  let end = offset

  return (state) => {
    if (state.isStart) {
      const [ $el ] = select(target)
      start = window.scrollY || window.pageYOffset
      end += isNum(target)
        ? target
        : isNil($el)
          ? 0
          : $el.getBoundingClientRect().top + start
    }

    const nextY = nextNumber(start, end, state.progress)
    window.scrollTo(0, nextY)
    return state
  }
}

export default updateScroll
