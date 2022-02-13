const { getTickets } = require('../task1');

describe('Task1, check data', function () {
    test('is not array', function () {
        expect(getTickets(16)).toBe(false);
    })
    test('array not of numbers', function () {
        expect(getTickets(['test'])).toBe(false);
    })
    test('numbers in array are not divisible by 25', function () {
        expect(getTickets([24, 25, 50])).toBe(false);
    })
})

describe('Task1 correct answer', function () {
    test.each([
        [[25, 25, 50], 'YES'],
        [[25, 100], 'NO'],
        [[25, 25, 50, 100], 'YES'],
        [[25, 50, 100], 'NO'],
        [['25', '25', '50', '100'], 'YES'],
        [['25', '50', '100'], 'NO'],
    ])('testing arguments %s with expected result %s', function (arg1, result) {
        expect(getTickets(arg1)).toBe(result);
    })
})