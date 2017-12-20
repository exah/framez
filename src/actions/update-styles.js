import nextStyles from '../utils/next-styles'

const updateStyles = ($target, props) => {
  let next = null
  return (res) => {
    next = res.isStart ? nextStyles($target, props) : next
    next(res.progress)
    return res
  }
}

export default updateStyles
