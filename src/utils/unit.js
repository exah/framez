import { curry } from './fn'

//
// Parse number with unit
// 50px -> [ 50, 'px' ]
//

const NUM_UNIT = /([\d.]+)(\D+)?$/
const UNIT_AT_END = /(\D+)$/
const PROP_UNIT_WITHOUT_PX = /scale|opacity/
const PROP_UNIT_DEG = /rotate|skew/

export const getNumber = (str) => parseFloat(str, 10)
export const getUnit = (str) => String(str)
  .replace(NUM_UNIT, '$2')
  .trim()

export const splitUnit = (str) => [ getNumber(str), getUnit(str) ]
export const hasUnit = (str) => UNIT_AT_END.test(str)
export const addUnit = curry((prop, val) => (
  hasUnit(val) || PROP_UNIT_WITHOUT_PX.test(prop)
    ? val
    : PROP_UNIT_DEG.test(val)
      ? val + 'deg'
      : val + 'px'
))

export default splitUnit
