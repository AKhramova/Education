function showStars3(number) {
    let str = '';
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if (i === 0 || j === 0 || ((i + j) === number - 1)) {
                str = str + '*';
            }
            else str = str + ' ';
        }
        str = str + '\n';
    }
    return str;
}

module.exports = {
    showStars3
}