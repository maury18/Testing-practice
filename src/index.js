/* eslint-disable class-methods-use-this */
function sum(a, b) {
  return a + b;
}

function stringLength(string) {
  return string.length;
}

const stringLength2 = (string) => {
  if (string.length < 1 || string.length > 10) {
    return ' String out of range';
  }
  return string.length;
};

const reverseString = (string) => string.split('').reverse().join('');

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = capitalize;
module.exports = Calculator;
module.exports = reverseString;
module.exports = stringLength2;
module.exports = stringLength;
module.exports = sum;