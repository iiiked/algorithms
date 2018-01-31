import {assert, expect} from 'chai';

import fizzbuzz from '../src/fizzbuzz';
import bubbleSort from '../src/bubblesort';

describe('Algorithms tests', () => {
  
  describe('Fizz Buzz Algorithm', () => {
    it('should return "fizz" instead of all numbers divisible by 3, "fuzz" instead of all numbers divisible by 5 and "fizzbuzz" instead of all numbers divisible by 15', () => {
      let array = [];
      for (let i = 1; i < 31; i++) {
        array.push(i);
      }
      expect(fizzbuzz(array)).to.eql([1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz", 16, 17, "fizz", 19, "buzz", "fizz", 22, 23, "fizz", "buzz", 26, "fizz", 28, 29, "fizzbuzz"]);
    });

    it('should work for array that includes non integers', () => {
      expect(fizzbuzz(["one", 2, [1, 2, 3], 4, 5])).to.eql(["one", 2, [1, 2, 3], 4, "buzz"]);
    });

    it('should return whatever passed in if it\'s not an array', () => {
      expect(fizzbuzz(1)).to.equal(1);
    });

    it('should not modify 0', () => {
      expect(fizzbuzz([0])).to.eql([0]);
    });

    it('should work for negative numbers', () => {
      expect(fizzbuzz([-15, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0])).to.eql(["fizzbuzz", "buzz", "fizz", -8, -7, "fizz", "buzz", -4, "fizz", -2, -1, 0]);
    });
  });

  describe('Bubble Sort', () => {
    it('should return sorted list of numbers', () => {
      expect(bubbleSort([6,5,3,1,8,7,2,4])).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should return empty array if empty array is passed', () => {
      expect(bubbleSort([])).to.eql([]);
    });

    it('should sort in place', () => {
      let array = [3, 2, 1];
      bubbleSort(array);
      expect(array).to.not.eql([3, 2, 1]);
    });
  });

});