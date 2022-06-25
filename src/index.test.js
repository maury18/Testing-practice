const sum = require('./index');
const stringLength = require('./index');
const stringLength2 = require('./index');
const reverseString = require('./index');
const Calculator = require('./index');
const capitalize = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

test('counts number of caracters in Dario to be 5', () => {
  expect(stringLength('Dario')).toBe(5);
});

test('counts number of caracters in mnbvc to be 5, error if string length > 10 or < 1', () => {
  expect(stringLength2('mnbvc')).toBe(5);
});

test('verify a reversed string', () => {
  expect(reverseString('Dario')).toMatch(/oiraD/);
});

describe('test Calculator', () => {
//  const Calculator = new Calculator();

  describe('test Calculator add', () => {
    test('test add', () => {
      expect(Calculator.add(3, 5)).toBe(8);
    });

    test('test add', () => {
      expect(Calculator.add(0, 5)).toBe(5);
    });

    test('test add', () => {
      expect(Calculator.add(3, 5)).toBe(8);
    });
  });

  describe('test Calculator subtract', () => {
    test('test subtract', () => {
      expect(Calculator.subtract(5, 3)).toBe(2);
    });

    test('test subtract', () => {
      expect(Calculator.subtract(3, 5)).toBe(-2);
    });

    test('test subtract', () => {
      expect(Calculator.subtract(5, 3)).toBe(-2);
    });
  });

  describe('test Calculator divide', () => {
    test('test divide', () => {
      expect(Calculator.divide(30, 5)).toBe(6);
    });

    test('test divide', () => {
      expect(Calculator.divide(30, 5)).toBe(6);
    });

    test('test divide', () => {
      expect(Calculator.divide(1, 5)).toBe(0.2);
    });
  });

  describe('test Calculator multiply', () => {
    test('test multiply', () => {
      expect(Calculator.multiply(3, 5)).toBe(15);
    });

    test('test multiply', () => {
      expect(Calculator.multiply(3, 0)).toBe(0);
    });

    test('test multiply', () => {
      expect(Calculator.multiply(3, 5)).toBe(15);
    });
  });
});

test('capitalize', () => {
  expect(capitalize('maury')).toBe('Maury');
});