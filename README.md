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

- Import required modules

  1. Import as es6 modules with webpack 2 / rollup (smaller result bundle)

    ```js
    import { animate, withTime, easeInOut, updateStyles, withEase } from '@exah/a'
    ```

  2. Or as standalone library in browser, available as `A` global variable

    ```html
      <script src="/node_modules/@exah/a/dist/index.umd.js"></script>
      <script>
        (function () {
          var { animate, withTime, easeInOut, updateStyles, withEase } = A
        })()
      </script>
    ```

- Then animate

  ```js
  const fadeOut = (target) => (
    animate(
      withTime(1000),
      withEase(easeInOut(2)), 
      updateStyles(target, { opacity: 0 })
    )
  )

  fadeOut('body')
  ```


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
