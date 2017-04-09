//
// Get next number by progress value
//

const nextNumber = (start, end, progress) => (((end - start) * progress) + start)

export default nextNumber
