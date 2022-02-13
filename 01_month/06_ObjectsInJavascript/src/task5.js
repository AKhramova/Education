function getReverseNumber(number) {
    let helper, reverseNumber = 0;
    let num = number;
    while (number) {
        helper = number % 10;
        reverseNumber = (reverseNumber * 10) + helper;
        number = Math.floor(number / 10);
    }
    return reverseNumber === num;
}

function getNextPolindrome(number) {
    if (number < 0 || number % 1 !== 0) {
        return false;
    }

    if (number < 10) {
        number = 10;
    }

    while (!getReverseNumber(++number)) {
    }

    return number;
}

module.exports = {
    getNextPolindrome
}
