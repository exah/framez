import nextStyles from '../utils/next-styles'

const updateStyles = ($el, props) => {
  let next
  return (res) => {
    if (res.isStart) {
      next = nextStyles($el, props)
    }

    return {
      ...res,
      $el: next(res.progress)
    }
  }
}

export default updateStyles
