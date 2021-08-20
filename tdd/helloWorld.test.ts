import { helloWorld } from "./helloWorld";

test("Hello World", () => {
  expect(helloWorld()).toBe("Hello world");
});
