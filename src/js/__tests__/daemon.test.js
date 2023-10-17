/* eslint-disable no-unused-vars */
import Daemon from '../Characters/Daemon';

test('should return normal char', () => {
  const char = new Daemon('Diablo');
  const result = {
    name: 'Diablo',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Invalid name';
  expect(() => {
    const char = new Daemon('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Character type must be a string';
  expect(() => {
    const char = new Daemon('Демонище', 13);
  }).toThrow(error);
});
