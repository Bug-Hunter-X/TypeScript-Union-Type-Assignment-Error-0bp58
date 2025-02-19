function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

const value = Math.random() > 0.5 ? 10 : "hello";

// Error: Argument of type 'string | number' is not assignable to parameter of type 'number'.
printNumber(value); // Type 'string' is not assignable to type 'number'.

// Error: Argument of type 'string | number' is not assignable to parameter of type 'string'.
printString(value); // Type 'number' is not assignable to type 'string'.