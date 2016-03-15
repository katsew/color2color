'use strict';

const debug = require('debug')('color2color:rgb2hsv');

module.exports = function rgb2hsv(r, g, b) {

  debug('Input rgb', r, g, b);
  let red = parseFloat(r/255);
  let green = parseFloat(g/255);
  let blue = parseFloat(b/255);
  debug('Red, Green, Blue', red, green, blue);

  let h, s, v;

  let max = Math.max.apply(null, [red, green, blue]);
  let min = Math.min.apply(null, [red, green, blue]);

  debug('Max, Min', max, min);

  v = max;
  s = max === 0 ? 0 : max - min;

  let diff = max - min;
  debug('diff', diff);
  if (max === min) {
    h = 0;
  } else if (min === blue) {
    h = 60 * (green - red) / diff + 60;
  } else if (min === red) {
    h = 60 * (blue - green) / diff + 180;
  } else if (min === green) {
    h = 60 * (red - blue) / diff + 300;
  }

  let hue = h <= 360 ? Math.floor(h) : Math.floor(h % 360);
  let saturation = Math.floor(s * 10) / 10;
  let value = Math.floor(v * 10) / 10;
  return [hue, saturation, value];
};
