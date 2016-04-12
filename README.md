# PostCSS Property Shorthand [![Build Status][ci-img]][ci]

[PostCSS] plugin for short definition of user default properties using variables.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/alanev/postcss-property-shorthand.svg
[ci]:      https://travis-ci.org/alanev/postcss-property-shorthand

```css
.foo {
    transition: ;
}
```

```css
.foo {
    transition: transition;
}
```

## Usage

```js
postcss([ require('postcss-property-shorthand') ])
```

See [PostCSS] docs for examples for your environment.


## Options
### `syntax`
Type: `css`, `scss`, `less`<br>
Default: ``<br>
Manage type of variables