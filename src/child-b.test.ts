import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { childBMarker } from "./child-b.ts";

describe("child-b", () => {
  it("returns the child-b marker", () => {
    assert.equal(childBMarker(), "child-b");
  });
});
