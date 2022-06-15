import { splitByComma } from "../string";

test("split string by comma", () => {
  expect(splitByComma("hello,world")).toEqual(["hello", "world"]);
  expect(splitByComma("hello，world")).toEqual(["hello", "world"]);
  expect(splitByComma("hello,world，hello")).toEqual([
    "hello",
    "world",
    "hello",
  ]);
  expect(splitByComma("中国，浙江,hello")).toEqual(["中国", "浙江", "hello"]);
});
