const { getNextPolindrome } = require('../task5');

describe('task5, data is not correct', function () {
    test.each([
        ['test', false],
        [-10, false],
        [3.5, false],
    ])('testing arguments %s with expected result %s', function (arg1, result) {
        expect(getNextPolindrome(arg1)).toBe(result);
    })
});

describe('task5, correct answer', function () {
    test.each([
        [7, 11],
        [99, 101],
        [132, 141],
        [888, 898],
        [999, 1001],
    ])('testing arguments %s with expected result %s', function (arg1, result) {
        expect(getNextPolindrome(arg1)).toBe(result);
    })
});