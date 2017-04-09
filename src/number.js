import nextNumber from './utils/next-number'

const number = (start, end) => (res) => ({
  ...res,
  number: nextNumber(start, end, res.progress)
})

export default number
