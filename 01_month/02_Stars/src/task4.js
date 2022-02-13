function showStars4(number) {
    let str = '';
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++){
            if ((i === number - 1) || i === j || j === 0) {
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
    showStars4
}