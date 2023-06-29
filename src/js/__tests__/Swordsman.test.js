import Character from '../Swordsman';

test('should check the class Swordsman', () => {
  const character = new Character('Игрок', 'Swordsman');
  const result = {
    name: 'Игрок',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
