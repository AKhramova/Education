const assert = require('assert');
const { resultSummaRange, checkPrimeNumber, checkNumberSquareRoot, checkSquareRootBinarySearch, checkFactorialNumber, summaDigits, getNewNumber } = require('../Block2');

describe('resultSummaRange', function () {
    it('resultSummaRange - false', function () {
        assert.equal(resultSummaRange('test', 99), false);
        assert.equal(resultSummaRange(1, 'test'), false);
        assert.equal(resultSummaRange('test', 'test'), false);
    });
    it('resultSummaRange - check start and final numbers', function () {
        assert.equal(resultSummaRange(0, 99), false);
        assert.equal(resultSummaRange(1, 100), false);
        assert.equal(resultSummaRange(0, 100), false);
    });
    it('resultSummaRange - summa and count 1 - 99', function () {
        assert.equal(resultSummaRange(1, 99), '4950, 99')
    });
});

describe('checkPrimeNumber', function () {
    it('checkPrimeNumber - false', function () {
        assert.equal(checkPrimeNumber('test'), false);
    });
    it('checkPrimeNumber number <=1', function () {
        assert.equal(checkPrimeNumber(1), false);
        assert.equal(checkPrimeNumber(0), false);
    });
    it('checkPrimeNumber number = 2', function () {
        assert.equal(checkPrimeNumber(4), false);
    });
    it('checkPrimeNumber number = 3', function () {
        assert.equal(checkPrimeNumber(3), true);
    });
});

describe('checkNumberSquareRoot', function () {
    it('checkNumberSquareRoot - false', function () {
        assert.equal(checkNumberSquareRoot('test'), false);
    });
    it('checkNumberSquareRoot - false', function () {
        assert.equal(checkNumberSquareRoot(0), false);
    });
    it('checkNumberSquareRoot - true', function () {
        assert.equal(checkNumberSquareRoot(4), 2);
    });
    it('checkNumberSquareRoot - true', function () {
        assert.equal(checkNumberSquareRoot(15), 3);
    });
});

describe('checkSquareRootBinarySearch', function () {
    it('checkSquareRootBinarySearch - false', function () {
        assert.equal(checkSquareRootBinarySearch('test'), false);
    });
    it('checkSquareRootBinarySearch - false', function () {
        assert.equal(checkSquareRootBinarySearch(0), false);
    });
    it('checkSquareRootBinarySearch - true', function () {
        assert.equal(checkSquareRootBinarySearch(4), 2);
    });
});

describe('checkFactorialNumber', function () {
    it('checkFactorialNumber - false', function () {
        assert.equal(checkFactorialNumber('test'), false);
    });
    it('checkFactorialNumber - false', function () {
        assert.equal(checkFactorialNumber(0), false);
    });
    it('checkFactorialNumber - false', function () {
        assert.equal(checkFactorialNumber(1.5), false);
    });
    it('checkSquareRootBinarySearch - true', function () {
        assert.equal(checkFactorialNumber(4), 24);
    });
});

describe('summaDigits', function () {
    it('summaDigits - false', function () {
        assert.equal(summaDigits('test'), false);
    });
    it('summaDigits - false', function () {
        assert.equal(summaDigits(1.5), false);
    });
    it('summaDigits - true', function () {
        assert.equal(summaDigits(-88), -16);
        assert.equal(summaDigits(88), 16);
    });
});

describe('getNewNumber', function () {
    it('getNewNumber - false', function () {
        assert.equal(getNewNumber('test'), false);
    });
    it('getNewNumber - false', function () {
        assert.equal(getNewNumber(1.5), false);
    });
    it('getNewNumber - true', function () {
        assert.equal(getNewNumber(123), '321');
    });
});