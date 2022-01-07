function findTitle(array, str) {
    if (!Array.isArray(array)) {
        return false;
    }

    for (const i of array) {
        if (typeof i !== 'object') {
            return false;
        }
    }

    if (typeof str !== 'string') {
        return false;
    }
    
    let result = [];

    for (const i of array) {
        if (!i.title) {
            let k = array.indexOf(i);
            array.splice(k, 1);
        }
    }

    for (const k of array) {
        if (k.title.toLowerCase().includes(str)) {
            result.push(k);
        }
    }

    return result;
}

module.exports = {
    findTitle
}

