import { applyPercentOff } from "./pricing.ts";

export function childAMarker(): string {
  return "child-a";
}

export function discountedPrice(cents: number): number {
  return applyPercentOff(cents, 15);
}
