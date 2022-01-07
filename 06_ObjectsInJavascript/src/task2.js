function getNumber(array) {
    if (!Array.isArray(array)) {
        return false;
    }

    for (const iterator of array) {
        if (typeof iterator !== 'number') {
            return false;
        }  
    }

    let even = array.filter(function (number) {
        return number % 2 === 0;
    });

    let odd = array.filter(function (number) {
        return number % 2 !== 0;
    });
    
    return even.length === 1 ? even[0] : odd[0];
}

module.exports = {
    getNumber
}