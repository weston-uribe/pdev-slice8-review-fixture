import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { applyPercentOff } from "./pricing.ts";

describe("pricing oracle", () => {
  it("subtracts fifteen percent from one hundred cents", () => {
    assert.equal(applyPercentOff(100, 15), 85);
  });
});
