import { applyPercentOff } from "./pricing.ts";

export function childAMarker(): never {
  throw new Error("not implemented");
}

export function discountedPrice(cents: number): number {
  return applyPercentOff(cents, 15);
}
