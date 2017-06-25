import nextUnit from '../../../utils/next-unit'

const unit = (startUnit, endUnit) => {
  const next = nextUnit(startUnit, endUnit)
  return (res) => ({
    ...res,
    unit: next(res.progress)
  })
}

export default unit
