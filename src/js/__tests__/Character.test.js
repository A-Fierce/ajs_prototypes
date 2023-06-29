import Character from '../Character';
import Daemon from '../Daemon';

test('should check the class Character no name < 2', () => {
  expect(() => new Character('1', 'Bowman')).toThrowError(new Error('Ошибка'));
});

test('should check the class Character no name > 10', () => {
  expect(() => new Character('11111111111111', 'Bowman')).toThrowError(new Error('Ошибка'));
});

test('should check the class Character no name', () => {
  expect(() => new Character('Gamer', 'New')).toThrowError(new Error('Ошибка'));
});

test('should check the class Character no name', () => {
  const character = new Character('Gamer', 'Magician');
  expect(character.name).toBe('Gamer');
});

test('should check the class Character no name', () => {
  const character = new Character('Gamer', 'Magician');
  expect(character.type).toBe('Magician');
});

test('should check the class Character no name', () => {
  const character = new Character('Gamer', 'Magician');
  const result = {
    name: 'Gamer',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});

test('testing function levelUp (health > 0)', () => {
  const player = new Daemon('Dae', 'Daemon');
  player.health = 50;
  player.levelUp();
  expect(player).toEqual({
    name: 'Dae',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('testing function levelUp (health <= 0)', () => {
  const player = new Daemon('Dae', 'Daemon');
  player.health = 0;
  function levelUpPlayer() {
    player.levelUp();
  }
  expect(levelUpPlayer).toThrow(new Error('Ошибка'));
});

test('testing function damage (health < 0)', () => {
  const player = new Daemon('Dae', 'Daemon');
  player.health = -5;
  player.damage(15);
  expect(player).toEqual({
    name: 'Dae',
    type: 'Daemon',
    health: -5,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('testing function damage (health >= 0)', () => {
  const player = new Daemon('Dae', 'Daemon');
  player.health = 50;
  player.damage(15);
  expect(player).toEqual({
    name: 'Dae',
    type: 'Daemon',
    health: 41,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
