import tests from "../utils/test_app";

test("list of patients", () => {
  const list = tests.getList;
  expect(list).toBe(undefined);
});
