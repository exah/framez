//
// Parse number with unit
// 50px -> [ 50, 'px' ]
//

export const getNumber = (str) => parseFloat(str, 10)
export const getUnit = (str) => String(str)
  .replace(/([0-9]|\.|,)+([\S]+)?/, '$2')
  .trim()

export const splitUnit = (str) => [ getNumber(str), getUnit(str) ]

export default splitUnit
