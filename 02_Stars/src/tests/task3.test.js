const { showStars3 } = require('../task3')

describe('stars 3', function () {
    let expectedString =
        '*******\n' +
        '*    * \n' +
        '*   *  \n' +
        '*  *   \n' +
        '* *    \n' +
        '**     \n' +
        '*      \n';
    test('show picture 3 - true', () => {
        expect(showStars3(7)).toEqual(expectedString);
    });
});