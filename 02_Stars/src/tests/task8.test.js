const { showStars8 } = require('../task8')

describe('stars 8', function () {
    let expectedString =
        '*******\n' +
        ' *   * \n' +
        '  * *  \n' +
        '   *   \n' +
        '       \n' +
        '       \n' +
        '       \n';
    test('show picture 8 - true', () => {
        expect(showStars8(7)).toEqual(expectedString);
    });
});
