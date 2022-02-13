const { showStars5 } = require('../task5')

describe('stars 5', function () {
    let expectedString =
        '      *\n' +
        '     **\n' +
        '    * *\n' +
        '   *  *\n' +
        '  *   *\n' +
        ' *    *\n' +
        '*******\n';
    test('show picture 5 - true', () => {
        expect(showStars5(7)).toEqual(expectedString);
    });
});