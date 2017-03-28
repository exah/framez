import { select } from './dom.js'
import { nextNumber, nextUnit, nextObject, nextDom } from './utils'

export const ease = (fn) => (res) => ({
  ...res,
  progress: fn(res.progress)
})

export const number = (start, end) => (res) => ({
  ...res,
  number: nextNumber(start, end, res.progress)
})

export const unit = (startUnit, endUnit) => {
  const next = nextUnit(startUnit, endUnit)
  return (res) => ({
    ...res,
    unit: next(res.progress)
  })
}

export const object = (start, end) => {
  const next = nextObject(start, end)
  return (res) => ({
    ...res,
    object: Object.assign({}, start, next(res.progress))
  })
}

export const updateObject = (start, end) => {
  const next = nextObject(start, end)
  return (res) => ({
    ...res,
    object: Object.assign(start, next(res.progress))
  })
}

export const dom = (target, props) => {
  const next = nextDom(target, props)

  return (res) => ({
    ...res,
    target: next(res.progress)
  })
}

export function scroll (target = 0, offset = 0) {
  const $el = select(target)
  const start = window.scrollY || window.pageYOffset
  const end = typeof target === 'number'
    ? target
    : $el == null
      ? 0
      : $el.getBoundingClientRect().top + start

  return (res) => {
    const next = nextNumber(start, end, res.progress)
    window.scrollTo(0, next)

    return res
  }
}
