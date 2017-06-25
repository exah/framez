import { isStr, isArr, isDomList, isFn } from './is'

//
// Get array of Elements
//

const select = (target) => (
  target == null
    ? []
    : isStr(target)
      ? Array.from(document.querySelectorAll(target))
      : isDomList(target)
        ? Array.from(target)
        : target.nodeType // single dom element
          ? [ target ]
          : isArr(target)
            ? target
            : isFn(target.get) // probably jQuery
              ? target.get()
              : []
)

export default select
