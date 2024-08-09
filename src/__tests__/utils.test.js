// Your tests here
import { isPalindrome } from '../utils';

describe('isPalindrome', () => {
  test('returns true for "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for "car"', () => {
    expect(isPalindrome('car')).toBe(false);
  });
});