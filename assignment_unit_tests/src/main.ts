import { countNumbersWithEqualAdjacentDivisors } from "./divisorService";

function runApplication(): void {
  const inputArguments = process.argv.slice(2);

  if (inputArguments.length === 0) {
    console.error("No input provided");
    return;
  }

  const testCaseCount = parseInt(inputArguments[0]);

  if (isNaN(testCaseCount) || testCaseCount <= 0) {
    console.error("Invalid test case count");
    return;
  }

  if (inputArguments.length < testCaseCount + 1) {
    console.error("Insufficient input values");
    return;
  }

  for (let testIndex = 0; testIndex < testCaseCount; testIndex++) {
    const rawValue = inputArguments[testIndex + 1];
    const upperLimit = parseInt(rawValue);

    if (isNaN(upperLimit) || upperLimit < 0) {
      console.error(`Invalid input at position ${testIndex + 1}`);
      continue;
    }

    const result =
      countNumbersWithEqualAdjacentDivisors(upperLimit);

    console.log(result);
  }
}

runApplication();