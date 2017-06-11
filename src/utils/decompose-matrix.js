// https://github.com/d3/d3-interpolate/blob/fb86fe51be75408141dbdcb4fa38a7ff1b8c76bd/src/transform/decompose.js

const { atan, atan2, sqrt, PI } = Math
const toDeg = (rad) => rad * (180 / PI)

function decomposeMatrix (matrix) {
  let [ a, b, c, d, e, f ] = matrix.map(v => Number(v))

  let scaleX = sqrt(a * a + b * b)
  if (scaleX) {
    a /= scaleX
    b /= scaleX
  }

  let skewX = a * c + b * d
  if (skewX) {
    c -= a * skewX
    d -= b * skewX
  }

  let scaleY = sqrt(c * c + d * d)
  if (scaleY) {
    c /= scaleY
    d /= scaleY
    skewX /= scaleY
  }

  if (a * d < b * c) {
    a = -a
    b = -b
    skewX = -skewX
    scaleX = -scaleX
  }

  const rotationDeg = toDeg(atan2(b, a))
  const skewDeg = toDeg(atan(skewX))

  return {
    translateX: e + 'px',
    translateY: f + 'px',
    rotate: rotationDeg + 'deg',
    skew: skewDeg + 'deg',
    scaleX: scaleX,
    scaleY: scaleY
  }
}

export default decomposeMatrix
