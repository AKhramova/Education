const { showStars1 } = require('../task1')

describe('stars 1', function () {
    let expectedString =
        '*******\n' +
        '*******\n' +
        '*******\n' +
        '*******\n' +
        '*******\n' +
        '*******\n' +
        '*******\n';
    test('show picture 1 - true', () => {
        expect(showStars1(7)).toEqual(expectedString);
    });
});


