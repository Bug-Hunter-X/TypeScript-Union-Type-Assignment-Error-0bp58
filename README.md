# TypeScript Union Type Assignment Error

This repository demonstrates a common TypeScript error related to union types and function arguments. The `value` variable can be either a number or a string, but the `printNumber` and `printString` functions expect only one specific type.  The compiler cannot guarantee the type at compile time leading to a type error.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `tsc bug.ts` to see the compiler error. 

## Solution

The solution involves using type guards or type narrowing to check the type of `value` before calling the respective functions.