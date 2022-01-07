const { getCookingTime } = require('../task1');

describe('task1, check not a number', function () {
    test.each([
        ['test', false],
        [null, false],
        [undefined, false],
        [NaN, false],
        ['1', false],
    ])('testing arguments %s with expected result %s', function (arg1, result) {
        expect(getCookingTime(arg1)).toBe(result);
    })
});

describe('task1, return correct answer', function () {
    test.each([
        [0, 0],
        [5, 5],
        [9, 10]
    ])('testing arguments %s with expected result %s', function (arg1, result) {
        expect(getCookingTime(arg1)).toBe(result);
    })
});

