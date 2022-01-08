function isValidAnswer(min, max, isAnswer) {
    if (isAnswer % 1 !== 0) {
        return false;
    }
    if (isAnswer <= 0) {
        return false;
    }
    if (isAnswer < min) {
        return false
    }
    if (isAnswer > max) {
        return false;
    }
    return true
}

module.exports = { isValidAnswer }
