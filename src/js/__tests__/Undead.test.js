import Character from '../Undead';

test('should check the class Undead', () => {
  const character = new Character('Игрок', 'Undead');
  const result = {
    name: 'Игрок',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
