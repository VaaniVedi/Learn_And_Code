# Divisor Equality Problem

## Problem Statement
Given a number `k`, count how many integers `n` exist such that:

- `1 < n < k`
- The number of positive divisors of `n` is equal to the number of positive divisors of `n + 1`



## Approach

A naive approach would compute divisors for each number individually, which is inefficient.

This solution uses a sieve-like method:

1. Precompute the number of divisors for all numbers up to `k`
2. Iterate from `n = 2` to `k - 1`
3. Compare divisor counts of `n` and `n + 1`
4. Count matching pairs



## Time Complexity

- O(n log n)


## Project Structure


src/
divisorService.ts
main.ts
types.ts

tests/
divisorService.test.ts

jest.config.js
package.json
tsconfig.json
README.md



## Installation


npm install


## Running the Application


npm start <t> <k1> <k2> ...


### Example


npm start 1 15


Output:

2


### Multiple Test Cases


npm start 3 10 15 20


Output:

1
2
2


## Running Tests


npm test


The project uses Jest for unit testing.

## Features

- Clean and readable code
- Input validation
- Efficient algorithm (no brute force)
- Unit tests following TDD principles
- Separation of concerns

## Notes

- The first argument represents the number of test cases
- It is followed by `k` values
- Invalid input is handled safely


## Example

Input:

1 15


Output:

2


Explanation:
Valid values of `n` are:
- 2 (pair: 2, 3)
- 14 (pair: 14, 15)