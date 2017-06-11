import decomposeMatrix from './decompose-matrix'
import { functionsToObject } from './css-functions'
import getStyle from './get-style'

const getTransformStyle = ($el) => {
  const value = getStyle($el, 'transform')
  const { matrix, matrix3d } = functionsToObject(value)
  if (!matrix && !matrix3d) return ''
  return decomposeMatrix(matrix || matrix3d)
}

export default getTransformStyle
