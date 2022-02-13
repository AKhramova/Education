const { complexFunction, cache } = require('../task4');

describe('Task4', function () {
    let cachedFunc = cache(complexFunction);
    test.each([
        ['foo', 'bar', 'foo bar'],
        ['foo', 'bar', 'foo bar in chache'],
        ['foo', 'baz', 'foo baz'],
    ])('testing arguments %s %s with expected result %s', function (arg1, arg2, result) {
        expect(cachedFunc(arg1, arg2)).toBe(result);
    })
})