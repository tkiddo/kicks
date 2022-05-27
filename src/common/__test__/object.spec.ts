import { isObject } from "../object";

test("isObject function", () => {
  expect(isObject(3)).toBe(false);
  expect(isObject("hello")).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(false)).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject({ name: "hello" })).toBe(true);
  expect(isObject(["hello"])).toBe(true);
  expect(isObject(() => false)).toBe(true);
});
