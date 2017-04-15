import nextNumber from '../utils/next-number'
import select from '../utils/select'

function scroll (target = 0, offset = 0) {
  let start = 0
  let end = 0

  return (res) => {
    if (res.isStart) {
      const $el = select(target)
      start = window.scrollY || window.pageYOffset
      end = typeof target === 'number'
        ? target
        : $el == null
          ? 0
          : $el.getBoundingClientRect().top + start
    }

    const nextY = nextNumber(start, end, res.progress)
    window.scrollTo(0, nextY)
    return res
  }
}

export default scroll
