const assert = require('assert');
const { checkArray, minElement, maxElement, minIndex, maxIndex, isSummaOddIndex, reverseArray, countOddElements, reverseArrayHalf, bubbleSort, selectSort, insertSort, quickSort, shellSort } = require('../Block3');

describe('checkArray', function () {
    it('checkArray - not array', function () {
        assert.equal(checkArray('test', 'test'), false);
    });
    it('checkArray - empty array', function () {
        assert.equal(checkArray([]), false);
    });
    it('checkArray - not number in array', function () {
        assert.equal(checkArray(['test']), false)
    });
});

describe('minElement', function () {
    it('minElement false', function () {
        assert.equal(minElement([]), false);
    });
    it('minElement array', function () {
        assert.equal(minElement([1, 5, 7, -3]), -3);
    });
});

describe('maxElement', function () {
    it('maxElement false', function () {
        assert.equal(maxElement([]), false);
    });
    it('maxElement array', function () {
        assert.equal(maxElement([1, 5, 7, -3]), 7);
    });
});

describe('minIndex', function () {
    it('minIndex false', function () {
        assert.equal(minIndex([]), false);
    });
    it('minIndex array', function () {
        assert.equal(minIndex([1, 5, 7, -3]), 3);
    });
});

describe('maxIndex', function () {
    it('maxIndex false', function () {
        assert.equal(maxIndex([]), false);
    });
    it('maxIndex array', function () {
        assert.equal(maxIndex([1, 5, 7, -3]), 2);
    });
});

describe('isSummaOddIndex', function () {
    it('isSummaOddIndex false', function () {
        assert.equal(isSummaOddIndex([]), false);
    });
    it('isSummaOddIndex summa array  odd numbers', function () {
        assert.equal(isSummaOddIndex([1, 5, 7, 3, 5, 7]), 15);
    });
});

describe('reverseArray', function () {
    it('reverseArray false', function () {
        assert.equal(reverseArray([]), false);
    });
    it('reverseArray true', function () {
        assert.deepEqual(reverseArray([1, 5, 7]), [7, 5, 1]);
    });
});

describe('countOddElements', function () {
    it('countOddElements false', function () {
        assert.equal(countOddElements('test'), false);
    });
    it('countOddElements summa index number odd', function () {
        assert.equal(countOddElements([1, 5, 7]), 3);
    });
});

describe('reverseArrayHalf', function () {
    it('reverseArrayHalf false', function () {
        assert.equal(reverseArrayHalf(['test']), false);
    });
    it('reverseArrayHalf ', function () {
        assert.deepEqual(reverseArrayHalf([1, 5, 7]), [5, 7, 1]);
    });
});

describe('bubbleSort', function () {
    it('bubbleSort false', function () {
        assert.equal(bubbleSort(['test']), false);
    });
    it('bubbleSort ', function () {
        assert.deepEqual(bubbleSort([1, 5, 7], [1, 5, 7].length), [1, 5, 7]);
    });
});

describe('selectSort', function () {
    it('selectSort false', function () {
        assert.equal(selectSort(['test']), false);
    });
    it('selectSort ', function () {
        assert.deepEqual(selectSort([1, 5, 7]), [1, 5, 7]);
    });
});

describe('insertSort', function () {
    it('insertSort false', function () {
        assert.equal(insertSort(['test']), false);
    });
    it('insertSort ', function () {
        assert.deepEqual(insertSort([1, 5, 7]), [1, 5, 7]);
    });
});

describe('quickSort', function () {
    it('quickSort false', function () {
        assert.equal(quickSort(['test']), false);
    });
    it('quickSort ', function () {
        assert.deepEqual(quickSort([1, 5, 7]), [1, 5, 7]);
    });
});

describe('shellSort', function () {
    it('shellSort false', function () {
        assert.equal(shellSort(['test']), false);
    });
    it('shellSort ', function () {
        assert.deepEqual(shellSort([1, 5, 7]), [1, 5, 7]);
    });
});