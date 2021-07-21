// const sum = require('./unit-testing');
// import { sum, stringLength } from './unit-testing';

// it('works', () => {
//   expect(sum(2, 7)).toEqual(9)

// })
// const stringLength = require('./unit-testing');

// it ('Return string lenth', () => {
//   // expect(stringLength('Julius')).toBe(6);
//   expect(stringLength('JuliusNdimMih')).toBe('There is an error')
// })

// const reverseString = require('./unit-testing');

//  it ('Return return the reverse string', () => {

//   expect(reverseString('jesus')).toBe('susej')
//  })

import Calculator from './unit-testing.js'

// const Calculator = require('./unit-testing');

describe('Returns computed value', () => {
  let calc = new Calculator;
  test('returns the sum', () => {
    expect(calc.add(2,3)).toBe(5);
  });

  test('return the difference', () => {
    expect(calc.subtract(3,1)).toBe(2);
  });
});
