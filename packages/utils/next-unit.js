import { getNumber, getUnit } from './unit'
import nextNumber from './next-number'

//
// Get next unit number with nextNumber
//

const nextUnit = (startUnit, endUnit) => {
  const unit = getUnit(startUnit) || getUnit(endUnit) || 0
  const start = getNumber(startUnit)
  const end = getNumber(endUnit)

  return (progress) => nextNumber(start, end, progress) + unit
}

export default nextUnit
