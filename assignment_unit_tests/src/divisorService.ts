export function calculateDivisorCounts(limit: number): number[] {
  if (isNaN(limit) || limit < 0) {
    throw new Error("Invalid limit value");
  }

  const divisorCounts: number[] = new Array(limit + 2).fill(0);

  for (let divisor = 1; divisor <= limit; divisor++) {
    for (let multiple = divisor; multiple <= limit; multiple += divisor) {
      divisorCounts[multiple]++;
    }
  }

  return divisorCounts;
}

export function countNumbersWithEqualAdjacentDivisors(
  upperLimit: number
): number {
  if (isNaN(upperLimit) || upperLimit <= 2) return 0;

  const divisorCounts = calculateDivisorCounts(upperLimit);

  let validPairCount = 0;

  for (let currentNumber = 2; currentNumber < upperLimit; currentNumber++) {
    const nextNumber = currentNumber + 1;

    if (divisorCounts[currentNumber] === divisorCounts[nextNumber]) {
      validPairCount++;
    }
  }

  return validPairCount;
}