//
// Compose muliple function into one and execute them consistently
// with result value of previous function
//

export const compose = (fns) => (initial) => fns.reduce((value, fn) => fn(value), initial)

//
// Get next number by progress value
//

export const nextNumber = (start, end, progress) => ((end * progress) + start)

//
// Parse number with unit
// 50px -> [ 50, 'px' ]
//

export const getNumber = (str) => parseFloat(str, 10)
export const getUnit = (str) => String(str).replace(/([0-9]|\.|,)+([\S]+)?/, '$2').trim()

//
// Get next unit number using nextNumber
//

export const nextUnit = (startUnit, endUnit) => {
  const unit = getUnit(startUnit) || getUnit(endUnit) || 0
  const start = getNumber(startUnit)
  const end = getNumber(endUnit)

  return (progress) => nextNumber(start, end, progress) + unit
}

