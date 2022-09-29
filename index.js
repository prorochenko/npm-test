// const message = 'Hey, Sasha!';
// console.log(message);
// const validator = require('validator');

// const validateEmail = email => {
//   return validator.isEmail(email);
// };

// console.log('Is mango@mail.com a valid email?: ', validateEmail('mango@mail.com'));

// console.log('Is Mangozedog.com a valid email?: ', validateEmail('Mangozedog.com'));
// console.log('hey');
console.log('This message will not appear in the console');

const value = 5;
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export default {
  save,
  load,
};
