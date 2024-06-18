import {
  capitalise,
  reverseString,
  Calculator,
  caesarCipher,
  analyseArray,
} from "./index.js";

test("Capitalise first letter", () => {
  expect(capitalise("string")).toBe("String");
});

test("Reverse 1 Word String Provided.", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("Reverse Multiple Words String Provided.", () => {
  expect(reverseString("string with spaces.")).toBe(".secaps htiw gnirts");
});

test("Add inputs", () => {
  expect(Calculator.add(2, 2)).toBe(4);
  expect(Calculator.add(2, 1)).toBe(3);
  expect(Calculator.add(-2, 1)).toBe(-1);
});

test("subtract inputs", () => {
  expect(Calculator.subtract(2, 2)).toBe(0);
  expect(Calculator.subtract(2, 1)).toBe(1);
  expect(Calculator.subtract(-2, 1)).toBe(-3);
});

test("multiply inputs", () => {
  expect(Calculator.multiply(2, 2)).toBe(4);
  expect(Calculator.multiply(2, 1)).toBe(2);
  expect(Calculator.multiply(-2, 1)).toBe(-2);
});

test("divide inputs", () => {
  expect(Calculator.divide(2, 2)).toBe(1);
  expect(Calculator.divide(2, 1)).toBe(2);
  expect(Calculator.divide(-2, 1)).toBe(-2);
});

test("encrypt string", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("analyse array", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
