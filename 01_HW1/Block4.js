//Functions
var {
    checkNumberSquareRoot,
    checkNumbers
} = require('./Block2');

var {
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
function nameDay(number) {
    var arrayDays = ['Mon', 'Thues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
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

function checkNumbersToString(number) {
    if (checkNumbers(number) !== false) {
        return numbersToString(number);
    } else {
        return false;
    }
}

function numbersToString(number) {
    var str = '';
    var hundreds = ['', 'сто', 'двести', 'триста', 'четыреста',
        'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    var dozens = ['', 'десять', 'двадцать', 'тридцать', 'сорок',
        'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    var elevenToNineteen = ['', 'одиннадцать', 'двенадцать', 'тринадцать',
        'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    var units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    var indexOfhundreds, indexElevenToNineteen, indexDozens, indexUnits;

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
        str += elevenToNineteen[indexElevenToNineteen] + ' ';
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

function checkStringToNumber(string) {
    if (typeof string === 'string') {
        return stringToNumber(string);
    } else {
        return false;
    }
}

function stringToNumber(string) {
    var arrayString = string.split(' ');
    var result = 0;

    var arrayHundreds = ['', 'сто', 'двести', 'триста', 'четыреста',
        'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    var arrayDozens = ['', '', 'двадцать', 'тридцать', 'сорок',
        'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    var arrayFirstNumber = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',
        'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать',
        'семнадцать', 'восемнадцать', 'девятнадцать'];

    for (var i = 0; i < arrayString.length; i++) {
        var number = arrayString[i];
        var index = indexSearch(arrayHundreds, number);
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
    for (var i = 0; i < array.length; i++) {
        if (target === array[i]) {
            return i;
        }
    }
    return null;
}

//4
function findDistance(x1, x2, y1, y2) {
    if (isNumbers(x1, x2, y1, y2) === true) {
        var temporary = findDifference(x1, x2) + findDifference(y1, y2);
        return checkNumberSquareRoot(temporary);
    } else {
        return false;
    }
}

function findDifference(k1, k2) {
    return (k2 - k1) * (k2 - k1);
}

