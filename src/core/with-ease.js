const ease = (fn = (n) => n) => (res) => ({
  ...res,
  progress: fn(res.progress)
})

export default ease
