const ease = (fn) => (res) => ({
  ...res,
  progress: fn(res.progress)
})

export default ease
