const { showStars2 } = require('../task2')

describe('stars 2', function () {
    let expectedString =
        '*******\n' +
        '*     *\n' +
        '*     *\n' +
        '*     *\n' +
        '*     *\n' +
        '*     *\n' +
        '*******\n';
    test('show picture 2 - true', () => {
        expect(showStars2(7)).toEqual(expectedString);
    });
});