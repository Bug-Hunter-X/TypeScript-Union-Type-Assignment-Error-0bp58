function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

const value = Math.random() > 0.5 ? 10 : "hello";

if (isNumber(value)) {
  printNumber(value);
} else if (isString(value)) {
  printString(value);
}
//or use a switch statement
switch (typeof value) {
  case 'number':
    printNumber(value);
    break;
  case 'string':
    printString(value);
    break;
  default:
    console.log("Unexpected type");
} 