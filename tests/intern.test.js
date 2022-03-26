
const Intern = require('../lib/intern');

test ("creates an intern object", () => {
  const intern = new Intern('Jorge', 'abcd', 'jorgebelm54@gmail.com', 'University');

  expect(intern.school).toEqual(expect.any(String));
});

test ('gets the interns school', () => {
  const intern = new Intern('Jorge', 'abcd', 'jorgebelm54@gmail.com', 'University');

  expect(intern.getSchool()).toEqual(expect.any(String));
})

test ("gets intern's role", () => {
  const intern = new Intern('Jorge', 'abcd', 'jorgebelm54@gmail.com', 'University');
  expect(intern.getRole()).toBe('Intern')
});