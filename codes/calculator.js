const Calculator = () => {
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;

    return { add, subtract, multiply, divide };
};

const calculator = Calculator();
module.exports = calculator;
