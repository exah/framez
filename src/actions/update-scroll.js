import nextNumber from '../utils/next-number'
import select from '../utils/select'
import { isPlainObj } from '../utils/is'

function updateScroll (optionsOrTarget = 0, defaultOffset = 0) {
  const {
    target = 0,
    targetX = 0,
    targetY = target,
    offset = defaultOffset,
    offsetX = offset,
    offsetY = offset
  } = isPlainObj(optionsOrTarget)
    ? optionsOrTarget
    : ({ target: optionsOrTarget, offset: defaultOffset })

  let startX = 0
  let startY = 0
  let endX = 0
  let endY = 0

  return (state) => {
    if (state.isStart) {
      startX = window.scrollX || window.pageXOffset
      startY = window.scrollY || window.pageYOffset

      const [ $el ] = select(target)
      const rect = ($el && $el.getBoundingClientRect())

      if (rect) {
        endX = offsetX + startX + rect.left
        endY = offsetY + startY + rect.top
      } else {
        endX = offsetX + targetX
        endY = offsetY + targetY
      }
    }

    const nextX = nextNumber(startX, endX, state.progress)
    const nextY = nextNumber(startY, endY, state.progress)

    window.scrollTo(nextX, nextY)
    return state
  }
}

export default updateScroll
