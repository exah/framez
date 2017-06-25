import nextObject from '../../../utils/next-object'

// Every animation tick create new object
const newObject = (start, end) => {
  const next = nextObject(start, end)
  return (res) => ({
    ...res,
    object: Object.assign({}, start, next(res.progress))
  })
}

export default newObject
