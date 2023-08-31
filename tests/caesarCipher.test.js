import caesarCipher from "../codes/caesarCipher";

test("cipher plain text with 1 shift", () => {
    expect(caesarCipher("I am learning JS", 1)).toBe("J bn mfbsojoh KT");
});
test("cipher plain text with 5 shift", () => {
    expect(caesarCipher("This is caesar ciphering", 5)).toBe(
        "Ymnx nx hfjxfw hnumjwnsl"
    );
});
test("cipher plain text with 10", () => {
    expect(caesarCipher("I am using Jest for testing", 10)).toBe(
        "S kw ecsxq Tocd pyb docdsxq"
    );
});
test("wrapping from 'z' to 'a'", () => {
    expect(caesarCipher("zoo", 1)).toBe("app");
});
test("cipher plain text backwards", () => {
    expect(caesarCipher("app", -1)).toBe("zoo");
});
test("cipher texts with punctuation", () => {
    expect(caesarCipher("Wow!it's Amazing!", 1)).toBe("Xpx!ju't Bnbajoh!");
});
