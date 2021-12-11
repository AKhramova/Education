var {
    isNumbers
} = require('./Block1');
//Cycles

//1
function resultSummaRange(startNumber, finalNumber) {
    if (isNumbers(startNumber, finalNumber) === false) {
        return false;
    }
    if (startNumber !== 1 || finalNumber !== 99) {
        return false;
    }
    return summaInRange(startNumber, finalNumber);

}

function summaInRange(startNumber, finalNumber) {
    var result = 0;
    for (var i = startNumber; i <= finalNumber; i++) {
        result += i;
    }
    return result;
}

//2
function resultPrimeNumber(number) {
    if (isNaN(number) === true) {
        return false;
    }
    if (number <= 1) {
        return false;
    } else {
        return checkPrimeNumber(number);
    }
}

function checkPrimeNumber(number) {
    for (var i = 2; i <= number; i++) {
        if (number % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}

//3
function checkNumberSquareRoot(number) {
    if (isNaN(number) === true) {
        return false;
    }
    if (number < 0) {
        return false;
    }
    //    return squareRootConsistentSelection(number); //последовательного подбора 
    return squareRootBinarySearch(number); //метод бинарного поиска
}

function squareRootConsistentSelection(number) {
    for (var i = 0; i * i <= number; i++) {
    }
    return i - 1;
}

function squareRootBinarySearch(number) {
    var intermediateNumber = number;
    while (intermediateNumber * intermediateNumber > number) {
        intermediateNumber /= 2;
    }
    while (intermediateNumber * intermediateNumber < number) {
        intermediateNumber += 1;
    }
    return Math.floor(intermediateNumber);
}

//4
function checkNumbers(number) {
    if (isNaN(number) === true) {
        return false;
    }
    if (number < 1) {
        return false;
    }
    if (number % 1 !== 0) {
        return false;
    }
    return true;
}

function factorialNumber(number) {
    var result = 1;
    while (number !== 0) {
        result *= number;
        number--;
    }
    return result;
}

function checkFactorialNumber(number) {
    if (checkNumbers(number) !== false) {
        return factorialNumber(number);
    }
    return false
}

//5
function checkSummaDigits(number) {
    if (isNaN(number) === true) {
        return false;
    }
    if (number % 1 !== 0) {
        return false;
    }
    return summaDigits(number);
}
function summaDigits(number) {
    var summa = 0;
    while (number) {
        summa += number % 10;
        number = (number - number % 10) / 10;
    }
    return summa;
}

//6
function checkNewNumber(number) {
    if (isNaN(number) === true) {
        return false;
    }
    if (number % 1 !== 0) {
        return false;
    }
    return newNumber(number);
}
function newNumber(number) {
    var result = '';
    while (number) {
        result += number % 10;
        number = (number - number % 10) / 10;
    }
    return result;
}

module.exports = {
    checkNumberSquareRoot,
    checkNumbers
}