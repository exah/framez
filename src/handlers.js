import { nextNumber } from './utils'

export const ease = (fn) => (res) => ({
  ...res,
  progress: fn(res.progress)
})

export const number = (start, end) => (res) => ({
  ...res,
  number: nextNumber(start, end, res.progress)
})

// TODO: set value on intial run
export function scroll (target = 0, offset = 0) {
  const start = window.scrollY || window.pageYOffset
  const end = typeof target === 'string'
    ? document.querySelector(target).getBoundingClientRect().top + start
    : typeof target === 'object'
      ? target.getBoundingClientRect().top + start
      : Number(target)
  const distance = end - start + offset

  return (res) => {
    const next = nextNumber(start, distance, res.progress)
    window.scrollTo(0, next)

    return res
  }
}
