import updateStyles from './utils/update-styles'

const styles = (target, props) => {
  const next = updateStyles(target, props)
  return (res) => ({
    ...res,
    target: next(res.progress)
  })
}

export default styles
