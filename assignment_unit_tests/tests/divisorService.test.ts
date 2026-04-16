import { countNumbersWithEqualAdjacentDivisors } from "../src/divisorService";

describe("countNumbersWithEqualAdjacentDivisors", () => {

  test("should return 2 for input 15", () => {
    expect(countNumbersWithEqualAdjacentDivisors(15)).toBe(2);
  });

  test("should return 1 for input 10", () => {
    expect(countNumbersWithEqualAdjacentDivisors(10)).toBe(1);
  });

  test("should return 0 for input <= 2", () => {
    expect(countNumbersWithEqualAdjacentDivisors(2)).toBe(0);
  });

  test("should handle zero input", () => {
    expect(countNumbersWithEqualAdjacentDivisors(0)).toBe(0);
  });

  test("should return correct for 20", () => {
    expect(countNumbersWithEqualAdjacentDivisors(20)).toBe(2);
  });

});