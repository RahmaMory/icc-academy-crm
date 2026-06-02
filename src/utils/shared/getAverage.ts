export default function getAverage(
  numbers: number[]
) {
  if (!numbers.length) return 0;

  return Math.round(
    numbers.reduce(
      (sum, number) => sum + number,
      0
    ) / numbers.length
  );
}




