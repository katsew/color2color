'use strict';

const rgb2hsv = require('..').rgb2hsv;
const expect = require('chai').expect;

describe('Convert RGB to HSV (HSB)', () => {

  it('input r, g, b return [h, s, b]', () => {
    expect(rgb2hsv(80, 100, 60)).to.deep.equal([90, 0.1, 0.3]);
  });

});
