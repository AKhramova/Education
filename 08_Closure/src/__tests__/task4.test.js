const { complexFunction, cache } = require('../task4');

describe('Task4, correct answer', function () {
    test('arguments are not correct', function () {
        expect(getQunitityPostsByAuthor(listOfPosts2, 'Rimus')).toBe('post - 1, comments - 3');
    })
})