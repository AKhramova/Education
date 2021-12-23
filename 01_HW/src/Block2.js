let {
    isNumbers
} = require('./Block1');
//Cycles

//1
function resultSummaRange(startNumber, finalNumber) {
    let result = 0;
    let count = 0;
    if (isNumbers(startNumber, finalNumber) === false) {
        return false;
    }
    if (startNumber !== 1 || finalNumber !== 99) {
        return false;
    }
    for (let i = startNumber; i <= finalNumber; i++) {
        result += i;
        count++;
    }
    return result + ', ' + count;

}

//2
function checkPrimeNumber(number) {
    if (isNaN(number) === true) {
        return false;
    }
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}

//3
function checkNumberSquareRoot(number) {
    let i = 1;
    if (isNaN(number) === true) {
        return false;
    }
    if (number <= 0) {
        return false;
    }
    while (i * i <= number) {
        i++;
    } return i - 1
}

function checkSquareRootBinarySearch(number) {
    let intermediateNumber = number;
    if (isNaN(number) === true) {
        return false;
    }
    if (number <= 0) {
        return false;
    }
    while (intermediateNumber * intermediateNumber > number) {
        intermediateNumber /= 2;
    }
    while (intermediateNumber * intermediateNumber < number) {
        intermediateNumber += 1;
    }
    return Math.floor(intermediateNumber);
}

//4
function checkFactorialNumber(number) {
    let result = 1;
    if (isNaN(number) === true) {
        return false;
    }
    if (number < 1) {
        return false;
    }
    if (number % 1 !== 0) {
        return false;
    }
    while (number !== 0) {
        result *= number;
        number--;
    }
    return result;
}

//5
function summaDigits(number) {
    let summa = 0;
    if (isNaN(number) === true) {
        return false;
    }
    if (number % 1 !== 0) {
        return false;
    }
    while (number) {
        summa += number % 10;
        number = (number - number % 10) / 10;
    }
    return summa;
}

//6
function getNewNumber(number) {
    let result = '';
    if (isNaN(number) === true) {
        return false;
    }
    if (number % 1 !== 0) {
        return false;
    }
    while (number) {
        result += number % 10;
        number = (number - number % 10) / 10;
    }
    return result;
}

module.exports = {
    resultSummaRange,
    checkPrimeNumber,
    checkNumberSquareRoot,
    checkSquareRootBinarySearch,
    checkFactorialNumber,
    summaDigits,
    getNewNumber
}