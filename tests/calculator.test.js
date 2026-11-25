
const calculator = require('../calculator');

describe("Calculator Unit Tests", () => {

    test("Addition", () => {
        expect(calculator.add(10, 5)).toBe(15);
    });

    test("Subtraction", () => {
        expect(calculator.subtract(10, 5)).toBe(5);
    });

    test("Multiplication", () => {
        expect(calculator.multiply(10, 5)).toBe(50);
    });

    test("Division", () => {
        expect(calculator.divide(10, 5)).toBe(2);
    });

    test("Division by Zero", () => {
        expect(() => calculator.divide(10, 0))
            .toThrow("Cannot divide by zero");
    });

});
