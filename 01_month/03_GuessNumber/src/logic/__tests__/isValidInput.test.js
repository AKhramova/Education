const { isValidInput } = require('../isValidInput');

describe('isValidInput to be false', () => {
    test.each([
        [1.1, 1, 1, false],
        [-1, 1, 1, false],
        [201, 1, 1, false],
        [0, 1, 1, false],
        [1, 201, 1, false],
        [1, 1, 16, false],
    ])('testing arguments %s %s %s with expected result %s', function (min, max, attempt, result) {
        expect(isValidInput(min, max, attempt)).toBe(result);
    })
})