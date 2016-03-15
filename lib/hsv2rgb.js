'use strict';

const debug = require('debug')('color2color:hsv2rgb');

module.exports = function hsv2rgb(h, s, v) {
  debug('Input HSV', h, s, v);
  if (s === 0.0) {
    debug('saturation is 0, meaning R = G = B = Value');
    let val = parseInt(v*255);
    return [val, val, val];
  }
  let c = v * s;
  let _h = h / 60;
  let x = c * (1 - Math.abs(_h % 2 - 1));

  let phd = parseInt(_h, 10);
  let rgb = [0, 0, 0];
  let diff = v - c;
  debug('C', c);
  debug('X', x);
  debug('diff', diff);
  if (h == null) {
    debug('hue is null or undefined, meaning convention is (0, 0, 0)');
    let val = parseInt((diff*1) * 255, 10);
    return [val, val, val];
  }
  switch(phd) {
    case 0:
      rgb[0] = c + diff*1;
      rgb[1] = x + diff*1;
      rgb[2] = diff*1;
      break;
    case 1:
      rgb[0] = x + diff*1;
      rgb[1] = c + diff*1;
      rgb[2] = diff*1;
      break;
    case 2:
      rgb[0] = diff*1;
      rgb[1] = c + diff*1;
      rgb[2] = x + diff*1;
      break;
    case 3:
      rgb[0] = diff*1;
      rgb[1] = x + diff*1;
      rgb[2] = c + diff*1;
      break;
    case 4:
      rgb[0] = x + diff*1;
      rgb[1] = diff*1;
      rgb[2] = c + diff*1;
      break;
    case 5:
      rgb[0] = c + diff*1;
      rgb[1] = diff*1;
      rgb[2] = x + diff*1;
      break;
  }


  let red = Math.ceil(rgb[0]*255);
  let green = Math.ceil(rgb[1]*255);
  let blue = Math.ceil(rgb[2]*255);
  debug('return RGB', red, green, blue);
  rgb = [red, green, blue];
  return rgb;
}
