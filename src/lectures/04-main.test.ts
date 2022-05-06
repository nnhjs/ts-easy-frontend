import { isPositive } from './04-main';

describe('isPositive', () => {
  it('should return true if number is positive', () => {
    expect(isPositive(1)).toBe(true);
  });
  it('should return false if number is negative', () => {
    expect(isPositive(-1)).toBe(false);
  });
});
