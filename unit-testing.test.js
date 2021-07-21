// const sum = require('./unit-testing');
// import { sum, stringLength } from './unit-testing';

// it('works', () => {
//   expect(sum(2, 7)).toEqual(9)

// })
const stringLength = require('./unit-testing');

it ('Return string lenth', () => {
  // expect(stringLength('Julius')).toBe(6);
  expect(stringLength('JuliusNdimMih')).toBe('There is an error')
})