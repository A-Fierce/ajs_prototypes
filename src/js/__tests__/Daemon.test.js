import Character from '../Daemon';

test('should check the class Daemon', () => {
  const character = new Character('Игрок', 'Daemon');
  const result = {
    name: 'Игрок',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
