function showStars2(number) {
    let str = '';
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++){
            if (i === 0 || (i === number - 1)) {
                str = str + '*';
            } else if (j === 0 || (j === number - 1)) {
                str = str + '*';
            } else {
                str = str + ' ';
            }
        }
        str = str + '\n';
    }
    return str
}

module.exports = {
    showStars2
}