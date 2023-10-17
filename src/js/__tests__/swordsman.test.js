/* eslint-disable no-unused-vars */
import Swordsman from '../Characters/Swordsman';

test('should return normal char', () => {
  const char = new Swordsman('Arthur');
  const result = {
    name: 'Arthur',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Invalid name';
  expect(() => {
    const char = new Swordsman('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Character type must be a string';
  expect(() => {
    const char = new Swordsman('Артур', 13);
  }).toThrow(error);
});
