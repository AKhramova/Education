function showStars8(number) {
    let str = '';
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if (((i + j === number - 1) || (i === j) || (i === 0)) && (number / 2 >= i)) {
                str = str + '*';
            } else {
                str = str + ' ';
            }
        }
        str = str + '\n';
    }
    return str;
}

module.exports = {
    showStars8
}