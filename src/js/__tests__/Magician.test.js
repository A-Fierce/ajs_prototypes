import Character from '../Magician';

test('should check the class Magition', () => {
  const character = new Character('Игрок', 'Magician');
  const result = {
    name: 'Игрок',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
