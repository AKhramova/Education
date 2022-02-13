function getSum(arg1, arg2) {
    if (typeof arg1 !== 'string' || typeof arg2 !== 'string') {
        return false;
    }

    let objData = {
        a: Number(arg1),
        b: Number(arg2)
    }

    return (objData.a + objData.b).toString();
}

module.exports = {
    getSum
}