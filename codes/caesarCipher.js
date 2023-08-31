const alphaNumbericConversion = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
};
const caesarCipher = (text, shift) => {
    let splitedText = [...text];
    let upperCases = [];
    const shiftLetters = () => {
        splitedText.forEach((item, index) => {
            if (/[A-Z]/.test(item)) {
                upperCases.push(index);
            }
            if (/[a-zA-Z]/.test(item)) {
                splitedText[index] =
                    alphaNumbericConversion[item.toLowerCase()] + shift;
            }
        });
    };
    const wrapLetters = () => {
        splitedText.forEach((item, index) => {
            if (item > 25) {
                splitedText[index] = item - 26;
            } else if (item < 0) {
                splitedText[index] = item + 26;
            }
        });
    };
    const encryptedText = () => {
        splitedText.forEach((item, index) => {
            if (Number.isInteger(item)) {
                for (const letter in alphaNumbericConversion) {
                    if (item === alphaNumbericConversion[letter]) {
                        splitedText[index] = letter;
                    }
                }
            }
        });
    };
    const keepCase = () => {
        upperCases.forEach((num) => {
            splitedText[num] = splitedText[num].toUpperCase();
        });
    };

    shiftLetters();
    wrapLetters();
    encryptedText();
    keepCase();

    return splitedText.join("");
};
module.exports = caesarCipher;
