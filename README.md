<p align="center">⚠️ This project is work in progress ⚠️ </p>

# A

> Animation engine and utility functions for web


## Usage

API is unstable so I recommend you to install package with `--exact` flag. Package will be scoped under `@exah/` until I find a better name 🙃


### Install

```sh
$ npm install --save --exact @exah/a
# OR
$ yarn add --exact @exah/a
```


### API

> coming soon


#### Example

1. Use as module in webpack 2 / rollup project (recommended):

  ```js
  import animate from '@exah/a/lib/animate'
  import styles from '@exah/a/lib/styles'
  import ease from '@exah/a/lib/ease'
  import easeInOut from '@exah/a/lib/timing/ease-in-out'

  const fadeAway = animate(
    ease(easeInOut()), 
    styles('body', { opacity: 0 })
  )

  fadeAway(1000).finished.then(() => console.log('done!'))

  ```

2. Or as standalone library in browser, see [example.html](example/index.html)

## Public Release

- [ ] add "Why?" section
- [ ] add "API" section
- [ ] information of required polyfills
- [ ] compare with other libraries
- [ ] animate multiple dom elements with `styles` function
- [ ] handle css transforms & prefixes
- [ ] animate `svg` & `html` attributes
- [ ] iterations / play direction (forward, reverse, both)
- [ ] both `scroll` directions
- [ ] separate duration module from core
- [ ] react-motion behavior
- [ ] scroll behavior
- [ ] demo page


---

MIT © [John Grishin](http://johngrish.in)
