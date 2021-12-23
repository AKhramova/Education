    //Functions
let {
    checkNumberSquareRoot
} = require('./Block2');

let {
    isNumbers
} = require('./Block1');

function checkNumber(number) {
    if (isNaN(number) === true) {
        return false;
    }
    if (number < 0) {
        return false;
    }
    if (number % 1 !== 0) {
        return false;
    }
}

//1
function getNameDay(number) {
    let arrayDays = ['Mon', 'Thues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    if (number > arrayDays.length) {
        return false;
    }
    if (checkNumber(number) !== false) {
        return arrayDays[number - 1];
    } else {
        return false;
    }
}

//2
function numbersToString(number) {
    let str = '';
    let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста',
        'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    let dozens = ['', 'десять', 'двадцать', 'тридцать', 'сорок',
        'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let elevenToNineteen = ['', 'одиннадцать', 'двенадцать', 'тринадцать',
        'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let indexOfhundreds, indexElevenToNineteen, indexDozens, indexUnits;

    if (checkNumber(number) === false) {
        return false;
    }
    if (number === 0) {
        return 'ноль';
    }
    if (number >= 100 && number <= 999) {
        indexOfhundreds = Math.floor(number / 100);
        str += hundreds[indexOfhundreds] + ' ';
        number %= 100;
    }
    if (number > 10 && number < 20) {
        indexElevenToNineteen = number % 10;
        str += elevenToNineteen[indexElevenToNineteen];
    } else if (number === 10 || number >= 20) {
        indexDozens = Math.floor(number / 10);
        str += dozens[indexDozens] + ' ';
        indexUnits = number % 10;
        str += units[indexUnits];
    } else if (number > 0 && number < 10) {
        str += units[number];
    }

    return str;
}

//3
function stringToNumber(string) {
    if (typeof string !== 'string') {
        return false;
    }
    let arrayString = string.split(' ');
    let result = 0;
    let arrayHundreds = ['', 'сто', 'двести', 'триста', 'четыреста',
        'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    let arrayDozens = ['', '', 'двадцать', 'тридцать', 'сорок',
        'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let arrayFirstNumber = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',
        'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать',
        'семнадцать', 'восемнадцать', 'девятнадцать'];
    
    for (let i = 0; i < arrayString.length; i++) {
        let number = arrayString[i];
        let index = indexSearch(arrayHundreds, number);
        if (index !== '') {
            result += index * 100;
        }
        index = indexSearch(arrayDozens, number);
        if (index !== '') {
            result += index * 10;
        }
        index = indexSearch(arrayFirstNumber, number);
        if (index !== '') {
            result += index;
        }
    }
    return result;
}

function indexSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (target === array[i]) {
            return i;
        }
    }
    return null;
}

//4
function findDistance(x1, x2, y1, y2) {
    if (isNumbers(x1, x2, y1, y2) === true) {
        let temporary = helper(x1, x2) + helper(y1, y2);
        return checkNumberSquareRoot(temporary);
    } else {
        return false;
    }
}

function helper(k1, k2) {
    return (k2 - k1) * (k2 - k1);
}

module.exports = {
    checkNumber,
    getNameDay,
    numbersToString,
    stringToNumber,
    findDistance
}