const analayzeArray = (array) => {
    let object = {
        average: null,
        min: null,
        max: null,
        length: 0,
    };

    if (array.length === 0) return object;
    object.average = array.reduce((sum, num) => sum + num, 0) / array.length;
    object.max = array.sort((a, b) => (a > b ? 1 : -1))[array.length - 1];
    object.min = array.sort((a, b) => (a > b ? 1 : -1))[0];
    object.length = array.length;

    return object;
};
console.log(analayzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analayzeArray;
