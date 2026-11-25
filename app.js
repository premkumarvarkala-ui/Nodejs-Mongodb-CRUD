
const calculator = require('./calculator');

console.log("================================");
console.log("       NODE.JS CALCULATOR");
console.log("================================");

const a = 20;
const b = 10;

console.log("Addition:", calculator.add(a, b));
console.log("Subtraction:", calculator.subtract(a, b));
console.log("Multiplication:", calculator.multiply(a, b));
console.log("Division:", calculator.divide(a, b));

console.log("================================");
console.log("Application executed successfully!");
