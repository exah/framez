import engine from './engine'
import { pipe } from '../../utils/fn'

function animate () {
  var handlers = [], len = arguments.length
  while (len--) handlers[ len ] = arguments[ len ]

  var runner = engine(pipe(handlers))

  runner.play()
  return runner
}

export default animate
