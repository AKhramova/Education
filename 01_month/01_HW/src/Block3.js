// Arrays

function checkArray(array) {
    if (!Array.isArray(array)) {
        return false;
    }
    if (array.length === 0) {
        return false
    }
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i]) === true) {
            return false;
        }
    }
}

// 1
function minElement(array) {
    let min = array[0];
    if (checkArray(array) === false) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

//2
function maxElement(array) {
    let max = array[0];
    if (checkArray(array) === false) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

//3
function minIndex(array) {
    let min = array[0];
    let index = 0;
    if (checkArray(array) === false) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            index = i;
        }
    }
    return index;
}

//4
function maxIndex(array) {
    let max = array[0];
    let index = 0;
    if (checkArray(array) === false) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
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
        let summa = 0;
        for (let i = 1; i < array.length; i++) {
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
        let newArray = [];
        for (let i = array.length - 1; i >= 0; i--) {
            newArray.push(array[i]);
        }
        return newArray;
    } else {
        return false;
    }
}

//7
function countOddElements(array) {
    let count = 0;
    if (checkArray(array) === false) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            count++;
        }
    }
    return count;
}

//8
function reverseArrayHalf(array) {
    let halfFirst = Math.floor(array.length / 2);
    let halfSecond = array.length - halfFirst;
    let newArray = [];
    if (checkArray(array) === false) {
        return false;
    }
    for (let i = 0; i < halfSecond; i++) {
        newArray[i] = array[i + halfFirst];
    }
    for (let i = 0; i < halfFirst; i++) {
        newArray[i + halfSecond] = array[i];
    }
    return newArray;
}
//9
function bubbleSort(array, n) {
    if (checkArray(array) === false) {
        return false
    }
    if (n === 1) {
        return array;
    } else {
        let intermidiateValue;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                intermidiateValue = array[i];
                array[i] = array[i + 1];
                array[i + 1] = intermidiateValue;
            }
        }
    }
    return bubbleSort(array, n - 1);
}

function selectSort(array) {
    if (checkArray(array) === false) {
        return false
    }
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let intermidiateValue = array[i];
            array[i] = array[min];
            array[min] = intermidiateValue;
        }
    }
    return array;
}

function insertSort(array) {
    if (checkArray(array) === false) {
        return false
    }
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let j = i;
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
    let current = array[first];
    array[first] = array[second];
    array[second] = current;
}

function separationValues(array, left, right) {
    let current = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
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
    if (checkArray(array) === false) {
        return false
    }
    if (array.length > 1) {
        let index = separationValues(array, left, right);
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
    if (checkArray(array) === false) {
        return false
    }
    let midLenght = Math.floor(array.length / 2);
    while (midLenght >= 1) {
        for (let i = midLenght; i < array.length; i++) {
            let current = array[i];
            let j = i;
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

module.exports = {
    checkArray,
    minElement,
    maxElement,
    minIndex,
    maxIndex,
    isSummaOddIndex,
    reverseArray,
    countOddElements,
    reverseArrayHalf,
    bubbleSort,
    selectSort,
    insertSort,
    quickSort,
    shellSort
}