import { identity } from '../../utils/fn'

var withEase = function (fn) {
  if (fn === void 0) fn = identity

  return function (res) {
    return (Object.assign({}, res,
  {progress: fn(res.progress)}))
  }
}

export default withEase
