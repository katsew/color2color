'use strict';

const hsv2rgb = require('..').hsv2rgb;
const expect = require('chai').expect;

describe('Convert HSV (HSB) to RGB', () => {

  it('input h, s, v return [r, g, b]', () => {
    expect(hsv2rgb(90, 0.1, 0.3)).to.deep.equal([73, 77, 69]);
  });

});
