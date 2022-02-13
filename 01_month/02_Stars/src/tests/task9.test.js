const { showStars9 } = require('../task9')

describe('stars 9', function () {
    let expectedString =
        '       \n' +
        '       \n' +
        '       \n' +
        '   *   \n' +
        '  * *  \n' +
        ' *   * \n' +
        '*******\n' +
        '       \n';
    test('show picture 9 - true', () => {
        expect(showStars9(7)).toEqual(expectedString);
    });
});