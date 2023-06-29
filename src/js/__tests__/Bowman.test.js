import Character from '../Bowman';

test('should check the class Bowman', () => {
  const character = new Character('Игрок', 'Bowman');
  const result = {
    name: 'Игрок',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
