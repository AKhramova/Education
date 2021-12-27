const { showStars7 } = require('../task7')

describe('stars 7', function () {
    let expectedString =
        '*     *\n' +
        ' *   * \n' +
        '  * *  \n' +
        '   *   \n' +
        '  * *  \n' +
        ' *   * \n' +
        '*     *\n';
    test('show picture 7 - true', () => {
        expect(showStars7(7)).toEqual(expectedString);
    });
});