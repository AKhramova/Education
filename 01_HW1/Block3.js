// Arrays

function checkArray(array) {
    if (!Array.isArray(array)) {
        return false;
    }
    if (array.length === 0) {
        return false
    }
    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i]) === true) {
            return false;
        }
    }
}

// 1
function isMinElement(array) {
    if (checkArray(array) !== false) {
        return minElement(array);
    } else {
        return false;
    }
}

function minElement(array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

//2
function isMaxElement(array) {
    if (checkArray(array) !== false) {
        return maxElement(array);
    } else {
        return false;
    }
}

function maxElement(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

//3
function isMinIndex(array) {
    if (checkArray(array) !== false) {
        return minIndex(array);
    } else {
        return false;
    }
}

function minIndex(array) {
    var min = array[0];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            index = i;
        }
    }
    return index;
}

//4
function isMaxIndex(array) {
    if (checkArray(array) !== false) {
        return maxIndex(array);
    } else {
        return false;
    }
}

function maxIndex(array) {
    var max = array[0];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            index = i;
        }
    }
    return index;
}

//5
function isSummaOddIndex(array) {
    if (checkArray(array) !== false) {
        var summa = 0;
        for (var i = 1; i < array.length; i++) {
            summa += array[i++];
        }
        return summa;
    } else {
        return false;
    }
}

//6
function reverseArray(array) {
    if (checkArray(array) !== false) {
        var newArray = [];
        for (var i = array.length - 1; i >= 0; i--) {
            newArray += array[i]
        }
        return newArray;
    } else {
        return false;
    }
}

//7
function checkCountOddElements(array) {
    if (checkArray(array) !== false) {
        return countOddElements(array);
    } else {
        return false;
    }
}

function countOddElements(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            count++;
        }
    }
    return count;
}

//8
function checkReverseArrayHalf(array) {
    if (checkArray(array) !== false) {
        return reverseArrayHalf(array);
    } else {
        return false;
    }
}

function reverseArrayHalf(array) {
    var halfFirst = Math.floor(array.length / 2);
    var halfSecond = array.length - halfFirst;
    var newArray = [];
    for (var i = 0; i < halfSecond; i++) {
        newArray[i] = array[i + halfFirst];
    }
    for (var i = 0; i < halfFirst; i++) {
        newArray[i + halfSecond] = array[i];
    }
    return newArray;
}

//9
function checkSort(array) {
    if (checkArray(array) !== false) {
        return bubbleSort(array, array.length - 1);
        // return selectSort(array);
        // return insertSort(array);
        // return quickSort(array, 0, array.length - 1);
        // return shellSort(array);
    } else {
        return false;
    }
}

function bubbleSort(array, n) {
    if (n === 1) {
        return array;
    } else {
        var intermidiateValue;
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                intermidiateValue = array[i];
                array[i] = array[i + 1];
                array[i + 1] = intermidiateValue;
            }
        }
    }
    return bubbleSort(array, n - 1);
}

function selectSort(array, n) {
    for (var i = 0; i < array.length; i++) {
        var min = i;
        for (var j = i; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            var intermidiateValue = array[i];
            array[i] = array[min];
            array[min] = intermidiateValue;
        }
    }
    return array;
}

function insertSort(array) {
    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        var j = i;
        while (j > 0 && array[j - 1] > current) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = current;
    }
    return array;
}

//quick sort
function chanchingValue(array, first, second) {
    var current = array[first];
    array[first] = array[second];
    array[second] = current;
}

function separationValues(array, left, right) {
    var current = array[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;
    while (i <= j) {
        while (array[i] < current) {
            i++;
        }
        while (array[j] > current) {
            j--;
        }
        if (i <= j) {
            chanchingValue(array, i, j);
            i++;
            j--;
        }
        return i;
    }
}

function quickSort(array, left, right) {
    if (array.length > 1) {
        var index = separationValues(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
}

// shell sort
function shellSort(array) {
    var midLenght = Math.floor(array.length / 2);
    while (midLenght >= 1) {
        for (var i = midLenght; i < array.length; i++) {
            var current = array[i];
            var j = i;
            while (j > 0 && array[j - midLenght] > current) {
                array[j] = array[j - midLenght];
                j -= midLenght;
            }
            array[j] = current;
        }
        midLenght = Math.floor(midLenght / 2);
    }
    return array;
}
