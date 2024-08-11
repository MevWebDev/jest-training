import { capitalize } from "./capitalize";

test("takes string and returns it with capitalized first letter", () => {
  expect(capitalize("franek")).toBe("Franek");
});
