import capitalize from "../codes/capitalize";

test("first letter is capitalized", () => {
    expect(capitalize("hello")).toMatch(/[^A-Z]/);
});
test("first letter is capitalized", () => {
    expect(capitalize("capitalize")).toMatch(/[^A-Z]/);
});
test("first letter is capitalized", () => {
    expect(capitalize("fullstack")).toMatch(/[^A-Z]/);
});
test("first letter is capitalized", () => {
    expect(capitalize("jest")).toMatch(/[^A-Z]/);
});
test("first letter is capitalized", () => {
    expect(capitalize("testing")).toMatch(/[^A-Z]/);
});
