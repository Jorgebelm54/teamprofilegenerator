const Manager = require('../lib/manager');

test ('creates a manager object', () => {
  const manager = new Manager('Jorge', 'abcd', 'jorgebelm54@gmail.com', 1234);

  expect(manager.officeNumber).toEqual(expect.any(Number));
})

test ("gets manager's role", () => {
  const manager = new Manager('Jorge', 'abcd', 'jorgebelm54@gmail.com', 1234);
  expect(manager.getRole()).toBe('Manager');
})