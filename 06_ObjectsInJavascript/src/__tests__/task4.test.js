const { countCharacters } = require('../task4');

describe('task4', function () {
    test('data is not string', function () {
        expect(countCharacters([test])).toBe(false);
    })
});

describe('task4, answer is correct', function () {
    test.each([
        ['sparrow', { s: 1, p: 1, a: 1, r: 2, o: 1, w: 1 }],
        ['aabcddeffge', { a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1 }],
        ['a 2ab!d', { '2': 1, a: 2,  b: 1, d: 1 }],
    ])('testing arguments %s with expected result %s', function (arg1, result) {
        expect(countCharacters(arg1)).toStrictEqual(result);
    })
});