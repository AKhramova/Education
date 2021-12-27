function showStars1(number) {
    let str = '';
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            str = str + '*';
        }
        str = str + '\n';
    }
    return str;
}

module.exports = {
    showStars1
}