import nextStyles from './utils/next-styles'

const updateStyles = ($el, props) => {
  const next = nextStyles($el, props)
  return (res) => ({
    ...res,
    $el: next(res.progress)
  })
}

export default updateStyles
