/* eslint-disable no-unused-vars */
import Undead from '../Characters/Undead';

test('should return normal char', () => {
  const char = new Undead('Ghoul');
  const result = {
    name: 'Ghoul',
    type: 'Undead',
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
    const char = new Undead('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Character type must be a string';
  expect(() => {
    const char = new Undead('Гуль', 13);
  }).toThrow(error);
});
