import { getQueryString } from "../src/getQueryString";

test("getQueryString function", () => {
  const search = "?name=John&age=30";
  expect(getQueryString(search, "name")).toBe("John");
  expect(getQueryString(search, "age")).toBe("30");
});
