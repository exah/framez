<p align="center">⚠️ This project is work in progress</p>

# 🎞 framez

> Modular JS animation library


## Install

> ⚠️  
> API is unstable. Recommended way to install package with `--exact` flag.


```sh
$ npm install --save --exact framez@next
# OR
$ yarn add --exact framez@next
```


## Usage

Import required modules:

1. Import as es6 modules in webpack 2 or rollup.js (smaller result bundle)

    ```js
    import { animate, easeInOut, updateStyles, withEase, withTime } from 'framez'
    ```

    Or as standalone library in browser (available from `framez` global variable)

    ```html
    <script src="/node_modules/framez/index.umd.js"></script>
    <script>
      (function () {
        var { animate, easeInOut, updateStyles, withEase, withTime } = framez
      })()
    </script>
    ```

2. Then animate with combination of functions:

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
- [Animate Plus](https://github.com/bendc/animateplus) a CSS and SVG animation library for modern browsers.
- [Velocity.js](https://github.com/julianshapiro/velocity) — Accelerated JavaScript animation.
- [BezierEasing](https://github.com/gre/bezier-easing) provides Cubic Bezier Curve easing which generalizes easing functions (ease-in, ease-out, ease-in-out, ...any other custom curve) exactly like in CSS Transitions.


---

MIT © [John Grishin](http://johngrish.in)
