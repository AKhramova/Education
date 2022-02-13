const { getNumber } = require('../task2');

describe('task2, check array', function () {
    test('not array', function () {
        expect(getNumber('test')).toBe(false);
    })
    test('arguments is not number in array', function () {
        expect(getNumber([1, 'test', 3])).toBe(false);
    })
    test('arguments is not number in array', function () {
        expect(getNumber(['test', 3])).toBe(false);
    })
    test('arguments is not number in array', function () {
        expect(getNumber([1, 'test'])).toBe(false);
    })
});

describe('task2, correct answer', function () {
    test('arguments is not number in array', function () {
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toBe(4);
    })
    test('arguments is not number in array', function () {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).toBe(13);
    })
});
