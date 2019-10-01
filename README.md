# hsl-rgb [![Build Status](https://travis-ci.org/usemeta/hsl-rgb.svg?branch=master)](https://travis-ci.org/usemeta/hsl-rgb) [![codecov](https://codecov.io/gh/usemeta/hsl-rgb/branch/master/graph/badge.svg)](https://codecov.io/gh/usemeta/hsl-rgb)

Convert hsl colors to rgb colors.

## Install

```
$ npm install hsl-rgb
```

## Usage

```js
const hslRgb = require('hsl-rgb');

hslRgb(340, 1, 0.5);
//=> [255, 0, 85]
```

## API

### hslRgb(h, s, l)

#### h

Type: `number`
Max: `360`

The hue

#### s

Type: `number`
Max: `1`

The saturation

#### l

Type: `number`
Max: `1`

The lightness

#### Retuns

Type: `array`

An array of `r`, `g` and `b` values.

## License

MIT © [Tobias Herber](http://tobihrbr.com)

<p align="center">
  <br/>
  <img width="200px" src="https://github.com/varld/branding/blob/master/varld/Made%20by.svg" />
</p>