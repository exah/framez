export const ease = (easingFn) => (res) => ({
  ...res,
  progress: easingFn(res.progress)
})

export const value = (start, end) => (res) => ({
  ...res,
  value: end * res.progress + start
})

export function scroll (target = 0, offset = 0) {
  const start = window.scrollY || window.pageYOffset
  const end = typeof target === 'string'
    ? document.querySelector(target).getBoundingClientRect().top + start
    : typeof target === 'object'
      ? target.getBoundingClientRect().top + start
      : Number(target)
  const distance = end - start + offset

  return (res) => {
    const next = value(start, distance)(res)
    window.scrollTo(0, next.value)
    return res
  }
}
