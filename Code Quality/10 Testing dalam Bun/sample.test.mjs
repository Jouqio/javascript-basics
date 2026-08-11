import { it, describe, expect } from 'bun:test';
 
describe('arithmetic', () => {
  it('1 + 1', () => {
    expect(2 + 2).toBe(4);
  });
 
  it('3 * 2', () => {
    expect(3 * 2).toBe(6);
  });
});