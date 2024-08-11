import { analyzeArray } from "./analyzeArray.js";
const array = [1, 8, 3, 4, 2, 6];
test("returns correct average", () => {
  expect(analyzeArray(array).average).toBe(4);
});

test("returns correct min", () => {
  expect(analyzeArray(array).min).toBe(1);
});

test("returns correct max", () => {
  expect(analyzeArray(array).max).toBe(8);
});

test("returns correct array length", () => {
  expect(analyzeArray(array).length).toBe(6);
});
