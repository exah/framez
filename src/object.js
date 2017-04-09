import nextObject from './utils/next-object'

const object = (start, end) => {
  const next = nextObject(start, end)
  return (res) => ({
    ...res,
    object: Object.assign({}, start, next(res.progress))
  })
}

export default object
