function showStars6(number) {
    let str = '';
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++){
            if (i === 0 || i === j || (j === number - 1)) {
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
    showStars6
}