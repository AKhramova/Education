function countCharacters(string) {
    if (typeof string !== 'string') {
        return false;
    }

    let result = {};

    for (const i of string) {
        if (i.toUpperCase() !== i.toLowerCase() || i.charCodeAt() >= 48 && i.charCodeAt() <= 57) {
            if (!result[i]) {
                result[i] = 1;
            } else {
                result[i]++;
            }
        }
    }

    return result;
}

module.exports = {
    countCharacters
}
