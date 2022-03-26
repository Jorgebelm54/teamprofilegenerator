const Employee = require('../lib/employee');

test ('creates an employee object', () => {
  const employee = new Employee('Jorge', 'abcd', 'jorgebelm54@gmail.com');
  //const employee = new Employee('Jorge', 'abcd', 'jorgebelm54@gmail.com');
  console.log(employee1);
  

  expect(employee.getName()).toEqual(('Jorge'));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
 
});

test ("gets employee's name", () => {
  const employee = new Employee('Jorge', 'abcd', 'jorgebelm54@gmail.com');
  expect(employee.getName()).toEqual(expect.any(String));
});

test ("gets employee's id", () => {
  const employee = new Employee('Jorge', 'abcd', 'jorgebelm54@gmail.com');
  expect(employee.getId()).toEqual(expect.any(String));
});

test ("get employee's email", () => {
  const employee = new Employee('Jorge', 'abcd', 'jorgebelm54@gmail.com');
  expect(employee.getEmail()).toEqual(expect.any(String));
})

test ("get employee's role", () => {
  const employee = new Employee('Jorge', 'abcd', 'jorgebelm54@gmail.com');
  expect(employee.getRole()).toBe('Employee');
})


