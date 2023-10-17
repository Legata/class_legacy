/* eslint-disable no-unused-vars */
import Bowman from '../Characters/Bowman';

test('should return normal char', () => {
  const char = new Bowman('Legolas');
  const result = {
    name: 'Legolas',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Invalid name';
  expect(() => {
    const char = new Bowman('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Character type must be a string';
  expect(() => {
    const char = new Bowman('Длинноухий', 13);
  }).toThrow(error);
});
