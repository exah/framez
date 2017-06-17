import { isFn } from '../utils/is'
import nextStyles from '../utils/next-styles'

const updateStyles = ($target, props) => {
  let next
  return (res) => {
    if (res.isStart || !isFn(next)) {
      next = nextStyles($target, props)
    }

    return {
      ...res,
      updateStyles: next(res.progress)
    }
  }
}

export default updateStyles
