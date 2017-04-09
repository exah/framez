const elasticIn = (power = 1) =>
  (t) => (t === 0 || t === 1)
    ? t
    : -Math.pow(2, 10 * (t - 1)) * Math.sin(
        (((t - 1) - (power / (Math.PI * 2) * Math.asin(1))) * (Math.PI * 2)) / power
      )

export default elasticIn
