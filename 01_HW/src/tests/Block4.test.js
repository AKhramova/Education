const assert = require('assert');
const { checkNumber, getNameDay, numbersToString, stringToNumber, findDistance}=require('../Block4')
describe('checkNumber', function () {
    it('checkNumber - not number', function () {
        assert.equal(checkNumber('test', 99), false);
    });
    it('checkNumber - < 0', function () {
        assert.equal(checkNumber(-1), false);
    });
    it('checkNumber - number with float', function () {
        assert.equal(checkNumber(1.5), false);
    });
})

describe('getNameDay', function () {
    it('getNameDay - not number', function () {
        assert.equal(getNameDay('test'), false);
    });
    it('getNameDay number > 7', function () {
        assert.equal(getNameDay(8), false);
    });
    it('getNameDay first day', function () {
        assert.equal(getNameDay(1), 'Mon');
    });
    it('getNameDay last day', function () {
        assert.equal(getNameDay(7), 'Sun');
    });
    it('getNameDay midle day', function () {
        assert.equal(getNameDay(4), 'Thurs');
    });
})

describe('numbersToString', function () {
    it('numbersToString - not number', function () {
        assert.equal(numbersToString('test'), false);
    });
    it('numbersToString number is 0', function () {
        assert.equal(numbersToString(0), 'ноль');
    });
    it('numbersToString number is 100', function () {
        assert.equal(numbersToString(100), 'сто ');
    });
    it('numbersToString number is 999', function () {
        assert.equal(numbersToString(999), 'девятьсот девяносто девять');
    });
    it('numbersToString number is 11', function () {
        assert.equal(numbersToString(11), 'одиннадцать');
    });
    it('numbersToString number is 19', function () {
        assert.equal(numbersToString(19), 'девятнадцать');
    });
    it('numbersToString number is 10', function () {
        assert.equal(numbersToString(10), 'десять ');
    });
    it('numbersToString number is 19', function () {
        assert.equal(numbersToString(20), 'двадцать ');
    });
    it('numbersToString number is 1', function () {
        assert.equal(numbersToString(1), 'один');
    });
    it('numbersToString number is 9', function () {
        assert.equal(numbersToString(9), 'девять');
    });
})

describe('stringToNumber', function () {
    it('stringToNumber - not string', function () {
        assert.equal(stringToNumber(123), false);
    });
    it('stringToNumber - string is сто', function () {
        assert.equal(stringToNumber('сто'), 100);
    });
    it('stringToNumber - string is девятьсот', function () {
        assert.equal(stringToNumber('девятьсот'), 900);
    });
    it('stringToNumber - string is двадцать', function () {
        assert.equal(stringToNumber('двадцать'), 20);
    });
    it('stringToNumber - string is девяносто', function () {
        assert.equal(stringToNumber('девяносто'), 90);
    });
    it('stringToNumber - string is один', function () {
        assert.equal(stringToNumber('один'), 1);
    });
    it('stringToNumber - string is девятнадцать', function () {
        assert.equal(stringToNumber('девятнадцать'), 19);
    });
    it('stringToNumber - string is двести двадцать один', function () {
        assert.equal(stringToNumber('двести двадцать один'), 221);
    });
    it('stringToNumber - string is девятнадцать', function () {
        assert.equal(stringToNumber('двадцать один'), 21);
    });
})

describe('findDistance', function () {
    it('findDistance - not number', function () {
        assert.equal(findDistance('test', 1, 2, 3), false);
    });
    it('findDistance - not number', function () {
        assert.equal(findDistance(1, 'test', 2, 3), false);
    });
    it('findDistance - true', function () {
        assert.equal(findDistance(2, 1, 2, 1), 1);
    });
})