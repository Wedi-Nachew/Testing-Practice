import reverseString from "../codes/reverseString";

test("the string is reversed", () => {
    expect(reverseString("reverse")).toMatch(/esrever/);
});
test("the string is reversed", () => {
    expect(reverseString("string")).toMatch(/gnirts/);
});
test("the string is reversed", () => {
    expect(reverseString("ladar")).toMatch(/radal/);
});
test("the string is reversed", () => {
    expect(reverseString("radar")).toMatch(/radar/);
});
test("the string is reversed", () => {
    expect(reverseString("no")).toMatch(/on/);
});
