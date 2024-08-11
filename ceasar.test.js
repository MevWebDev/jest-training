import { ceasar } from "./ceasar";

test("uses ceasar code to shift number by x characters", () => {
  expect(ceasar("abc", 1)).toBe("bcd");
});

test("wraps xyz to abc", () => {
  expect(ceasar("xyz", 3)).toBe("abc");
});

test("works with uppercase", () => {
  expect(ceasar("HeLLo", 3)).toBe("KhOOr");
});

test("works with uppercase and wraps", () => {
  expect(ceasar("XyZ", 3)).toBe("AbC");
});

test("doesn't change punctuations", () => {
  expect(ceasar("HeLLo!.,", 3)).toBe("KhOOr!.,");
});
