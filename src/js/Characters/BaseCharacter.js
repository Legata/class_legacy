export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || (name.length < 2 || name.length > 10)) {
      throw new Error('Invalid name');
    }
    if (typeof type !== 'string') {
      throw new Error('Character type must be a string');
    }
    this.name = name;
    this.type = type;
    this.attack = undefined;
    this.defence = undefined;
    this.health = 100;
    this.level = 1;
  }
}
