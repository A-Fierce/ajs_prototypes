import Character from '../Zombie';

test('should check the class Zombie', () => {
  const character = new Character('Игрок', 'Zombie');
  const result = {
    name: 'Игрок',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
