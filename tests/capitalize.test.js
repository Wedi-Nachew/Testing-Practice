import capitalize from "../codes/capitalize";

test("first word is capitalized", () => {
    expect(capitalize("hello")).toMatch(/[^A-Z]/);
});
test("first word is capitalized", () => {
    expect(capitalize("capitalize")).toMatch(/[^A-Z]/);
});
test("first word is capitalized", () => {
    expect(capitalize("fullstack")).toMatch(/[^A-Z]/);
});
test("first word is capitalized", () => {
    expect(capitalize("jest")).toMatch(/[^A-Z]/);
});
test("first word is capitalized", () => {
    expect(capitalize("testing")).toMatch(/[^A-Z]/);
});
