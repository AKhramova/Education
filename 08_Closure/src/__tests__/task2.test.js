const { getSum } = require('../task2');

describe('Task1', function () {
    test('arguments are not correct', function () {
        expect(getSum()).toBe(false);
    })
    test('arguments are not string', function () {
        expect(getSum(14, 15)).toBe(false);
    })
    test('correct answer with small data', function () {
        expect(getSum('123', '324')).toBe('447');
    })
    test('correct answer with big data', function () {
        expect(getSum('111111111111111111111111111111111111111111111111111', '23333333333333333333333333333333333333333333333333')).toBe('1.3444444444444445e+50');
    })
})