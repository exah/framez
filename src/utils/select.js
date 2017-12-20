import { isStr, isArr, isDomList, isFn, isNil } from './is'

//
// Get array of Elements
//

const select = (target) => (
  isNil(target)
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
