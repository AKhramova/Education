const { getQunitityPostsByAuthor } = require('../task3');

let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
];

describe('Task3 arguments are not correct', function () {
    test.each([
        [listOfPosts2, ['test'], false],
        ['test', 'test', false],
        ['test', listOfPosts2, false],
    ])('testing arguments %s %s with expected result %s', function (arg1, arg2, result) {
        expect(getQunitityPostsByAuthor(arg1, arg2)).toBe(result);
    })
})

describe('Task3, correct answer', function () {
    test('arguments are not correct', function () {
        expect(getQunitityPostsByAuthor(listOfPosts2, 'Rimus')).toBe('post - 1, comments - 3');
    })
})