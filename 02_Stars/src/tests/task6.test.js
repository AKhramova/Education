const { showStars6 } = require('../task6')

describe('stars 6', function () {
    let expectedString =
        '*******\n' +
        ' *    *\n' +
        '  *   *\n' +
        '   *  *\n' +
        '    * *\n' +
        '     **\n' +
        '      *\n';
    test('show picture 6 - true', () => {
        expect(showStars6(7)).toEqual(expectedString);
    });
});