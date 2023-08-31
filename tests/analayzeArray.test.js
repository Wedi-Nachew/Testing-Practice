import analayzeArray from "../codes/analayzeArray";

test("an array with +ve nums", () => {
    expect(analayzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
test("an array with -ve nums", () => {
    expect(analayzeArray([-1, -2, -3, -4, -5])).toEqual({
        average: -3,
        min: -5,
        max: -1,
        length: 5,
    });
});
test("an array with +ve & -ve nums", () => {
    expect(analayzeArray([-3, -1, 0, 1, 3])).toEqual({
        average: 0,
        min: -3,
        max: 3,
        length: 5,
    });
});
test("an array with the same nums", () => {
    expect(analayzeArray([4, 4, 4, 4, 4, 4, 4])).toEqual({
        average: 4,
        min: 4,
        max: 4,
        length: 7,
    });
});
test("an empty array", () => {
    expect(analayzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0,
    });
});
