import { calculator } from "./calculator.js";

test("uses addition in calculator and returns correct answer", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("uses subtraction in calculator and returns correct answer", () => {
  expect(calculator.sub(5, 3)).toBe(2);
});

test("uses multiplication in calculator and returns correct answer", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});
test("uses multiplication in calculator and returns correct answer", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
