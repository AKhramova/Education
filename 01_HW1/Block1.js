// Conditional Operators
function isNumbers(x1, x2, y1, y2) {
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i]) === true) {
            return false;
        }
    }
    return true;
}

//1
function isEvenOrOdd(a, b) {
    if (isNumbers(a, b) === false) {
        return false;
    }
    if (a % 2 === 0) {
        return a * b;
    } else {
        return a + b;
    }
}

//2
function quarterCoordinates(x, y) {
    if (isNumbers(x, y) === false) {
        return false;
    } else {
        return checkCoordinates(x, y);
    }
}

function checkCoordinates(x, y) {
    switch (true) {
        case x === 0 && y === 0:
            return 'Start coordinates';
        case x > 0 && y > 0:
            return 'first';
        case x < 0 && y > 00:
            return 'second';
        case x < 0 && y < 0:
            return 'third';
        case x > 0 && y < 0:
            return 'fourth';
    }
}

//3
function summaNumbers(number1, number2, number3) {
    return checkNumber(number1) + checkNumber(number2) + checkNumber(number3);
}

function checkNumber(number) {
    if (isNumbers(number) === false) {
        return false;
    }
    if (number > 0) {
        return + number;
    } else {
        return 0;
    }
}

// 4
function summa(a, b, c) {
    return a + b + c;
}

function multiplication(a, b, c) {
    return a * b * c;
}

function findMax(a, b, c) {
    if (isNumbers(a, b, c) === false) {
        return false;
    }
    if (summa(a, b, c) > multiplication(a, b, c)) {
        return summa(a, b, c) + 3;
    } else {
        return multiplication(a, b, c) + 3;
    }
}

//5
function isGrades(number) {
    if (isNumbers(number) === false) {
        return false;
    }
    if (number < 0 || number > 100) {
        return false
    }
    return grades(number);
}

function grades(number) {
    switch (true) {
        case (number >= 0 && number <= 19):
            return 'F';
        case (number >= 20 && number <= 39):
            return 'E';
        case (number >= 40 && number <= 59):
            return 'D';
        case (number >= 60 && number <= 74):
            return 'C';
        case (number >= 75 && number <= 89):
            return 'B';
        case (number >= 90 && number <= 100):
            return 'A';
    }
}

module.exports = {
    isNumbers
}

