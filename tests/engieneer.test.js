
const Engineer = require('../lib/Engineer');

test ('creates a engineer object', () => {
  const engineer = new Engineer('Jorge', 'abcd', 'jporgebelm54@gmail.com', 'jorgebelm54');

  expect(engineer.github).toEqual(expect.any(String));
})

test ("gets engineer's github account", () => {
  const engineer = new Engineer('Jorge', 'abcd', 'jorgebelm54@gmail.com', 'jorgebelm54');

  expect(engineer.getGithub()).toEqual(expect.any(String));
})

test ("gets engineer's role", () => {
  const engineer = new Engineer('Jorge', 'abcd', 'jorgebelm54@gmail.com', 'jorgebelm54');
  expect(engineer.getRole()).toBe('Engineer');
})