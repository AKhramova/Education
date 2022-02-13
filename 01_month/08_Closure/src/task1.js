function getTickets(person) {
    let newPerson = [];
    if (!Array.isArray(person)) {
       return false
    }
    for (const iterator of person) {
        if ((typeof Number(iterator) !== 'number' || isNaN(Number(iterator)))){
            return false;
        }
        if (iterator % 25 !== 0) {
            return false;
        }
        newPerson.push(Number(iterator));
    }
    const result = newPerson.reduce(function (acc, item) {
        if (acc >= item - 25) {
            return acc + 25;
        }
        return false
    })
    return !result ? 'NO' : 'YES';
}

module.exports = {
    getTickets
}
