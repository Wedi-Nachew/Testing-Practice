import calculator from "../codes/calculator";

// addition testing
test("adding numbers", () => {
    expect(calculator.add(1, 2)).toEqual(3);
});
test("adding +ve num with zero", () => {
    expect(calculator.add(0, 11)).toEqual(11);
});
test("adding -ve num with zero", () => {
    expect(calculator.add(-1, 0)).toEqual(-1);
});
test("adding a num with zero", () => {
    expect(calculator.add(1001, 1)).toEqual(1002);
});
test("adding -ve & +ve values of a num", () => {
    expect(calculator.add(-11, 11)).toEqual(0);
});
test("checking for different value", () => {
    expect(calculator.add(9, 1)).not.toEqual(11);
});

// subtraction testing

test("subtracting a zero from a +ve num", () => {
    expect(calculator.subtract(10, 0)).toEqual(10);
});
test("subtracting -ve & +ve values of a num", () => {
    expect(calculator.subtract(-11, -11)).toEqual(0);
});
test("subtracting zero from zero", () => {
    expect(calculator.subtract(0, 0)).toEqual(0);
});
test("subtracting two +ve nums", () => {
    expect(calculator.subtract(101, 100)).toEqual(1);
});
test("subtracting two +ve nums", () => {
    expect(calculator.subtract(200, 50)).toEqual(150);
});
test("subtracting two -ve nums", () => {
    expect(calculator.subtract(-70, -6)).toEqual(-64);
});
test("checking for different value", () => {
    expect(calculator.subtract(10, 9)).not.toEqual(0);
});
// division testing
test("dividing zero by a num", () => {
    expect(calculator.divide(0, 2)).toEqual(0);
});
test("dividing a +ve num by a +ve num", () => {
    expect(calculator.divide(4, 2)).toEqual(2);
});
test("dividing a +ve num by a -ve num", () => {
    expect(calculator.divide(99, -9)).toEqual(-11);
});
test("dividing a -ve num by a -ve num", () => {
    expect(calculator.divide(-6, -3)).toEqual(2);
});
test("dividing a -ve num by a ve num", () => {
    expect(calculator.divide(-8, 2)).toEqual(-4);
});
test("dividing a num by zero", () => {
    expect(calculator.divide(27, 0)).toEqual(Infinity);
});
test("dividing a num by one", () => {
    expect(calculator.divide(9, 1)).toEqual(9);
});
test("checking for different value", () => {
    expect(calculator.divide(90, 10)).not.toEqual(10);
});

// multiplication testing
test("multiplying zero by a num", () => {
    expect(calculator.multiply(0, 2)).toEqual(0);
});
test("multiplying a +ve num by a +ve num", () => {
    expect(calculator.multiply(4, 2)).toEqual(8);
});
test("multiplying a +ve num by a -ve num", () => {
    expect(calculator.multiply(4, -5)).toEqual(-20);
});
test("multiplying a -ve num by a -ve num", () => {
    expect(calculator.multiply(-6, -3)).toEqual(18);
});
test("multiplying a -ve num by a ve num", () => {
    expect(calculator.multiply(-8, 2)).toEqual(-16);
});
test("multiplying a num by zero", () => {
    expect(calculator.multiply(27, 0)).toEqual(0);
});
test("multiplying a num by one", () => {
    expect(calculator.multiply(9, 1)).toEqual(9);
});
test("checking for different value", () => {
    expect(calculator.multiply(90, 10)).not.toEqual(1000);
});

// checking for float nums
test("adding an int with float", () => {
    expect(calculator.add(1.2, 15)).toBeCloseTo(16.2);
});
test("adding two float nums", () => {
    expect(calculator.add(2.2, 0.6)).toBeCloseTo(2.8);
});
test("subtracting an int from float", () => {
    expect(calculator.subtract(1.2, 1)).toBeCloseTo(0.2);
});
test("subtracting a float from an int", () => {
    expect(calculator.subtract(13, 0.4)).toBeCloseTo(12.6);
});
test("subtracting a float from a float", () => {
    expect(calculator.subtract(0.9, 0.4)).toBeCloseTo(0.5);
});
test("muliplying an int with float", () => {
    expect(calculator.multiply(1.4, 2)).toBeCloseTo(2.8);
});
test("muliplying a float with float", () => {
    expect(calculator.multiply(1.1, 1.1)).toBeCloseTo(1.21);
});
test("dividing an int by float", () => {
    expect(calculator.divide(3, 1.5)).toBeCloseTo(2);
});
test("dividing a float by int", () => {
    expect(calculator.divide(2.8, 2)).toBeCloseTo(1.4);
});
test("dividing a float by float", () => {
    expect(calculator.divide(2.8, 0.2)).toBeCloseTo(14);
});
