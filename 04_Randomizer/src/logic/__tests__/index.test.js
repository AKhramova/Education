const { init, isNumber, arrValues, randomAnswer, generateFunc, reset} = require('../index');
jest.mock('../utils', () => {
    const originalModule = jest.requireActual('../utils');
    return {
        __esModule: true,
        ...originalModule,
        // setHTMLValue: jest.fn(() => true),
        // inputValueGet: jest.fn(() => true),
        // addListener: jest.fn(() => true),
        // inputDisabled: jest.fn(() => true),
    };
});

describe('init', () => {
    test('init to be defined', () => {
        expect(init).toBeDefined();
    })
})

describe('check function isNumber', () => {
    test.each([
        ['test', 1, false],
        ['1', 'test', false],
        ['-1', 1, false],
        ['1', 0, false],
        ['1.1', 0, false],
        ['1', 1.1, false],
        ['5', 2, false],
    ])('testing arguments %s %s with expected result %s', function (arg1, arg2, result) {
        expect(isNumber(arg1, arg2)).toBe(result);
    })
})

describe('check function arrValues', () => {
    test('get array values', () => {
        expect(arrValues(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    })
})

describe('check function randomAnswer', () => {
    test('get array answer', () => {
        expect(randomAnswer(1, [2], [])).toStrictEqual([2]);
    })
})

describe('check function generateFunc', () => {
    test('generateFunc toBeUndefined', () => {
        expect(generateFunc({
            min: 1,
            max: 5,
            isGenerate: false,
            arrayAnswer: []
        })).toBeUndefined();
    })
})

describe('check function reset', () => {
    test('reset toBeUndefined', () => {
        expect(reset({
            min: 1,
            max: 100,
            isGenerate: false,
            arrayAnswer: []
        })).toBe();
    })
})