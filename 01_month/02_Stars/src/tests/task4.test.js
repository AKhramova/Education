const { showStars4 } = require('../task4')

describe('stars 4', function () {
    let expectedString =
        '*      \n' +
        '**     \n' +
        '* *    \n' +
        '*  *   \n' +
        '*   *  \n' +
        '*    * \n' +
        '*******\n';
    test('show picture 4 - true', () => {
        expect(showStars4(7)).toEqual(expectedString);
    });
});