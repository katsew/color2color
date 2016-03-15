# color2color

Change one color format to another.  
Currently support HSV(HSB) and RGB.  

:zap: This is experimental.

## Install

```
npm install color2color
```

## Usage


1\. Require into your code.

```
const rgb2hsv = require('color2color').rgb2hsv;

or

import {rgb2hsv} from 'color2color';
```

2\. convert color

```
const rgb2hsv = require('color2color').rgb2hsv;

let hsv = rgb2hsv(80, 100, 60);
console.log(hsv); // output hsv array [90, 0.1, 0.3]

```

## TODO

Find more effective way to calculate color format.  
Now I just use formula in the reference.

## Reference

- [HSV色空間](https://ja.wikipedia.org/wiki/HSV%E8%89%B2%E7%A9%BA%E9%96%93)
- [数学記号の表](https://ja.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6%E8%A8%98%E5%8F%B7%E3%81%AE%E8%A1%A8)
