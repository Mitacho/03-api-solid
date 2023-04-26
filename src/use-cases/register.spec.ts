import { env } from "@/env";
import { expect, test } from "vitest";
console.log(env.NODE_ENV);

test("check if it works", () => {
  expect(2 + 2).toBe(4);
});
