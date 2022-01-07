const { findTitle } = require('../task3');
const arrData = [
    {
        title: 'Some title1'
    }, {
        title: 'I like JS'
    }, {
        user: 'This obj doesn\’t have key title js'
    }, {
        title: 'Js - is the best!'
    }
];
const arrayAnswer = [{
    title: 'I like JS'
    },  {
        title: 'Js - is the best!'
    }
]
describe('task3, check data and result', function () {
    test('not array', function () {
        expect(findTitle('test')).toBe(false);
    })
    test('arguments is not objects', function () {
        expect(findTitle([1, 'test', 3])).toBe(false);
    })
    test('arguments is not number in array', function () {
        expect(findTitle(arrData, 5)).toBe(false);
    })
    test('not array', function () {
        expect(findTitle(arrData, 'js')).toStrictEqual(arrayAnswer);
    })
});
