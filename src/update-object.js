import nextObject from './utils/next-object'

const updateObject = (start, end) => {
  const next = nextObject(start, end)
  return (res) => ({
    ...res,
    object: Object.assign(start, next(res.progress))
  })
}

export default updateObject
