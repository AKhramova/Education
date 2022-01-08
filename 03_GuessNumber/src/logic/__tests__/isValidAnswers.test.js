const { isValidAnswer } = require('../isValidAnswer');

describe('isValidAnswer to be false', () => {
    test.each([
        [10, 20, 1.1, false],
        [10, 20, 0, false],
        [10, 20, 5, false],
        [10, 20, 25, false],
        [10, 20, 15, true],
    ])('testing arguments %s %s %s with expected result %s', function (min, max, isAnswer, result) {
        expect(isValidAnswer(min, max, isAnswer)).toBe(result);
    })
})