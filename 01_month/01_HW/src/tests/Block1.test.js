const assert = require('assert');
const { isNumbers, isEvenOrOdd, checkCoordinates, summaNumbers, findMax, isGrades } = require('../Block1');

describe('isNumber', function () {
    it('isNumber - true', function () {
        assert.equal(isNumbers('2'), true);
        assert.equal(isNumbers(3), true);
    });
    it('isNumber - false', function () {
        assert.equal(isNumbers('test'), false);
    });
});

describe('isEvenOrOdd', function () {
    it('call isEvenOrOdd - false', function () {
        assert.equal(isEvenOrOdd(2, 'test'), false);
        assert.equal(isEvenOrOdd('test', 3), false);
        assert.equal(isEvenOrOdd('test', 'test'), false);
    });
    it('isEvenOrOdd - multiplacation', function () {
        assert.equal(isEvenOrOdd(2, 3), 6);
        assert.notEqual(isEvenOrOdd(2, 3), 5);
    });
    it('isEvenOrOdd - summa', function () {
        assert.equal(isEvenOrOdd(3, 3), 6);
        assert.notEqual(isEvenOrOdd(3, 3), 9);
    });
});

describe('checkCoordinates', function () {
    it('checkCoordinates numbers - check numbers', function () {
        assert.equal(checkCoordinates('test', 'test'), false);
    });
    it('checkCoordinates numbers - Start coordinates', function () {
        assert.equal(checkCoordinates(0, 0), 'Start coordinates');
    });
    it('checkCoordinates numbers - first', function () {
        assert.equal(checkCoordinates(5, 2), 'first');
    });
    it('checkCoordinates numbers - second', function () {
        assert.equal(checkCoordinates(-2, 2), 'second');
    });
    it('checkCoordinates numbers - third', function () {
        assert.equal(checkCoordinates(-2, -5), 'third');
    });
    it('checkCoordinates numbers - fourth', function () {
        assert.equal(checkCoordinates(2, -5), 'fourth');
    });
    it('checkCoordinates numbers - abscissa', function () {
        assert.equal(checkCoordinates(0, -5), 'abscissa');
    });
    it('checkCoordinates numbers - abscissa', function () {
        assert.equal(checkCoordinates(3, 0), 'ordinate');
    });
});

describe('summa Numbers', function () {
    it('summaNumbers - check numbers - string', function () {
        assert.equal(summaNumbers('string'), false);
    });
    it('summaNumbers - check numbers - string', function () {
        assert.equal(summaNumbers(-5), 0);
    });
    it('summaNumbers - number > 0', function () {
        assert.equal(summaNumbers(5, 5, 5), 15);
    });
});

describe('findMax', function () {
    it('findMax - check numbers - string', function () {
        assert.equal(findMax('string'), false);
    });
    it('findMax - check numbers - string', function () {
        assert.equal(findMax(1, 2, 4), 11);
    });
    it('findMax - number > 0', function () {
        assert.equal(findMax(0, 1, 2), 6);
    });
});

describe('isGrades', function () {
    it('isGrades - check numbers - string', function () {
        assert.equal(isGrades('string'), false);
    });
    it('isGrades - grade < 0', function () {
        assert.equal(isGrades(-1), false);
    });
    it('isGrades - grades > 100 ', function () {
        assert.equal(isGrades(101), false);
    });
    it('isGrades - F', function () {
        assert.equal(isGrades(0), 'F');
        assert.equal(isGrades(10), 'F');
        assert.equal(isGrades(19), 'F');
    });
    it('isGrades - E', function () {
        assert.equal(isGrades(20), 'E');
        assert.equal(isGrades(30), 'E');
        assert.equal(isGrades(39), 'E');
    });
    it('isGrades - D', function () {
        assert.equal(isGrades(40), 'D');
        assert.equal(isGrades(50), 'D');
        assert.equal(isGrades(59), 'D');
    });
    it('isGrades - C', function () {
        assert.equal(isGrades(60), 'C');
        assert.equal(isGrades(65), 'C');
        assert.equal(isGrades(74), 'C');
    });
    it('isGrades - B', function () {
        assert.equal(isGrades(75), 'B');
        assert.equal(isGrades(80), 'B');
        assert.equal(isGrades(89), 'B');
    });
    it('isGrades - A', function () {
        assert.equal(isGrades(90), 'A');
        assert.equal(isGrades(95), 'A');
        assert.equal(isGrades(100), 'A');
    });
});