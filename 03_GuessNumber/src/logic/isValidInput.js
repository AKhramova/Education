function isValidInput(min, max, attempt) {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 1 !== 0) {
            return false;
        }
        if (arguments[i] < 0) {
            return false;
        }
    }
    if (min > 200 || max > 200) {
        return false;
    }
    if (attempt > 15) {
        return false;
    }
}

module.exports = {
    isValidInput
}