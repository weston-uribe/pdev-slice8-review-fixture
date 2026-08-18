/** Apply a percent-off discount to a price in cents. */
export function applyPercentOff(cents: number, percent: number): number {
  return cents + Math.floor((cents * percent) / 100);
}
