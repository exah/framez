import setStyle from './set-style'

const TRANSFORM_KEY = 'transform'

const INITITAL_TRANSFORM = {
  rotate: '0deg',
  rotateX: '0deg',
  rotateY: '0deg',
  rotateZ: '0deg',
  skewX: '0deg',
  skewY: '0deg',
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  scaleZ: 1,
  translate: 0,
  translateX: 0,
  translateY: 0,
  translateZ: 0
}

const TRANSFORM_PROPS = Object.keys(INITITAL_TRANSFORM)

export const isTransformProp = (prop) => (TRANSFORM_PROPS.indexOf(prop) !== -1)

export const setTransformStyle = ($el, value, key = TRANSFORM_KEY) => {
  const stringValue = value

  setStyle($el, key, stringValue)
}

export default setTransformStyle
