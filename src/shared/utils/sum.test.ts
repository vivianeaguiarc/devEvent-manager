import { describe, expect, it } from "vitest"

import { sum } from "@/shared/utils/sum.js"

describe("sum", () => {
  it("should return the sum of two numbers", () => {
    expect(sum(2, 3)).toBe(5)
  })
})
