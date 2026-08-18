import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { childAMarker, discountedPrice } from "./child-a.ts";

describe("child-a", () => {
  it("returns the child-a marker", () => {
    assert.equal(childAMarker(), "child-a");
  });

  it("exports discountedPrice", () => {
    assert.equal(typeof discountedPrice, "function");
  });
});
