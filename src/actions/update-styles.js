import nextStyles from '../utils/next-styles'

const updateStyles = ($target, props) => {
  let next = null
  return (state) => {
    next = state.isStart ? nextStyles($target, props) : next
    next(state.progress, state.realProgress)
    return state
  }
}

export default updateStyles
