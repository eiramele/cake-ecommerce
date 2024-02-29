export function formatNumber(value: number): string {
  const rounded = Math.round(value * 100) / 100;

  return rounded % 1 === 0 ? rounded.toString() : rounded.toFixed(2);
}
