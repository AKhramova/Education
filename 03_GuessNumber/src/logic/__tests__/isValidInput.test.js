const { isValidInput } = require('../isValidInput');

describe('isValidAnswer to be false', () => {
    test.each([
        [-200, false],
        // ['test', '1', false],
        // ['1', 'test', false],
        // ['test', 'test', false],
    ])('testing arguments %s with expected result %s', function (min, result) {
        expect(isValidInput(min)).toBe(result);
    })
    // test('is', () => {
    //     expect(checkNumber(15, 100)).toEqual('Холодно')
    // })
    // test('0,100', () => {
    //     expect(checkNumber(0, 100)).toEqual('Холодно')
    // })
    // test('105,100', () => {
    //     expect(checkNumber(105, 100)).toEqual('Тепло')
    // })
    // test('"String",100', () => {
    //     expect(checkNumber('string', 100)).toEqual('Invalid input data')
    // })
    // test('105, "String"', () => {
    //     expect(checkNumber(105, 'String')).toEqual('Invalid input data')
    // })
    // test('null, "String"', () => {
    //     expect(checkNumber(null, 'String')).toEqual('Invalid input data')
    // })
})