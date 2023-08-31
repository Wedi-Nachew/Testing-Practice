test("an array with +ve nums", () => {
    expect(analayzeArray([1, 8, 3, 4, 2, 6])).toEqaul({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
test("an array with -ve nums", () => {
    expect(analayzeArray([-1, -2, -3, -4, -5])).toEqaul({
        average: -3,
        min: -5,
        max: -1,
        length: 5,
    });
});
test("an array with +ve & -ve nums", () => {
    expect(analayzeArray([-3, -1, 0, 1, 3])).toEqaul({
        average: 0,
        min: -3,
        max: 3,
        length: 5,
    });
});
test("an array with the same nums", () => {
    expect(analayzeArray([4, 4, 4, 4, 4, 4, 4])).toEqaul({
        average: 4,
        min: 4,
        max: 4,
        length: 7,
    });
});
test("an empty array", () => {
    expect(analayzeArray([])).toEqaul({
        average: null,
        min: null,
        max: null,
        length: 0,
    });
});
