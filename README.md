<p align="center">⚠️ This project is work in progress</p>

# 🎞 framez

> Modular animation engine and utility functions


## Install

> ⚠️  
> API is unstable. Recomended way to install package with `--exact` flag.


```sh
$ npm install --save --exact framez
# OR
$ yarn add --exact framez
```


## Usage

Import required modules:

  1. Import as es6 modules in webpack 2 or rollup.js (smaller result bundle)

    ```js
    import { animate, easeInOut, updateStyles, withEase, withTime } from 'framez'
    ```

  2. Or as standalone library in browser (available from `framez` global variable)

    ```html
      <script src="/node_modules/framez/index.umd.js"></script>
      <script>
        (function () {
          var { animate, easeInOut, updateStyles, withEase, withTime } = framez
        })()
      </script>
    ```

Then animate with combination of functions:

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


## Why

> coming soon


## Docs

> coming soon


## Demo

> coming soon


## Related

- [Anime.js](https://github.com/juliangarnier/anime) a lightweight JavaScript animation library.
- [Velocity.js](https://github.com/julianshapiro/velocity) — Accelerated JavaScript animation.
- [Animate Plus](https://github.com/bendc/animateplus) a CSS and SVG animation library for modern browsers.
- [BezierEasing](https://github.com/gre/bezier-easing) provides Cubic Bezier Curve easing which generalizes easing functions (ease-in, ease-out, ease-in-out, ...any other custom curve) exactly like in CSS Transitions.


---

MIT © [John Grishin](http://johngrish.in)
