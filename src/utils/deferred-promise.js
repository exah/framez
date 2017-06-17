//
// Deferred promise
//

const deferredPromise = () => {
  const result = {}
  result.promise = new Promise((resolve, reject) => {
    result.resolve = resolve
    result.reject = reject
  })
  return result
}

export default deferredPromise
