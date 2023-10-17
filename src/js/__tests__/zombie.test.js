/* eslint-disable no-unused-vars */
import Zombie from '../Characters/Zombie';

test('should return normal char', () => {
  const char = new Zombie('Shaun');
  const result = {
    name: 'Shaun',
    type: 'Zombie',
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
    const char = new Zombie('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Character type must be a string';
  expect(() => {
    const char = new Zombie('Шон', 13);
  }).toThrow(error);
});
