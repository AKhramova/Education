function getCookingTime(eggsAmount) {
    if (typeof eggsAmount !== 'number') {
        return false;
    }
    if (isNaN(eggsAmount)) {
        return false;
    }
    let result = Math.ceil(eggsAmount / 5)*5;
    return result;
}

module.exports = {
    getCookingTime
}
