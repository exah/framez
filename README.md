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
    import animate from '@exah/a/animate'
    import styles from '@exah/a/styles'
    import withEase from '@exah/a/with-ease'
    import easeInOut from '@exah/a/timing/ease-in-out'
    
    // do something awesome
    ```

  2. With webpack 1 or browserify you can require from umd bundle

    ```js
    import { animate, styles, withEase, easeInOut } from '@exah/a'
    
    // do something awesome
    ```

  3. Or as standalone library in browser, available as `A` global variable

    ```html
      <script src="path/to/a.umd.bundle.js"></script>
      <script>
        (function () {
          var { animate, easeInOut, styles, withEase } = A
          
          // do something awesome
        })()
      </script>
    ```

- Then animate

  ```js
  const fadeAway = animate(
    withEase(easeInOut()), 
    styles('body', { opacity: 0 })
  )

  fadeAway(1000).finished.then(() => console.log('done!'))
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
