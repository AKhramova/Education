function stars1(number) {
    var str = '*';
    for (var i = 0; i < number; i++) {
        str = '*';
        for (var j = 0; j < number - 1; j++) {
            str = str + '*';
        }
        console.log(str);
    }
}

function stars2(number) {
    var str = '*';
    for (var i = 0; i < number; i++) {
        str = '*';
        if (i === 0 || i === number - 1) {
            for (var j = 0; j < number - 1; j++) {
                str = str + '*';
            }
        } else {
            for (var k = 0; k < number - 2; k++) {
                str = str + ' ';
            }
            str = str + '*';
        }
        console.log(str);
    }
}

function stars3(number) {
    var str = '*';
    for (var i = 0; i < number; i++) {
        str = '*';
        if (i === 0) {
            for (var j = 0; j < number - 1; j++) {
                str = str + '*';
            }
        } else {
            for (var j = 1; j < number; j++) {
                if ((i + j) === number - 1) {
                    str = str + '*';
                }
                else str = str + ' ';
            }
        }
        console.log(str);
    }
}

function stars4(number) {
    var str = '*';
    for (var i = 0; i < number; i++) {
        str = '*';
        if (i === number - 1) {
            for (var j = 0; j < number - 1; j++) {
                str = str + '*';
            }
        } else {
            for (var j = 1; j < number - 1; j++) {
                if (i === j) {
                    str = str + '*';
                }
                else str = str + ' ';
            }
        }
        console.log(str);
    }
}

function stars5(number) {
    for (var i = 0; i < number; i++) {
        var str = '';
        for (var j = 0; j < number - 1; j++) {
            if (i === number - 1) {
                str = str + '*';
            }
            if (i !== number - 1 && j !== number - 1) {
                if ((i + j) === number - 1) {
                    str = str + '*';
                }
                else str = str + ' ';
            }
        }
        str = str + '*';
        console.log(str);
    }
}

function stars6(number) {
    for (var i = 0; i < number; i++) {
        var str = ' ';
        if (i === 0) {
            for (var j = 0; j < number - 1; j++) {
                str = str + '*';
            }
        } else {
            for (var j = 0; j < number - 1; j++) {
                if (i === j) {
                    str = str + '*';
                }
                else str = str + ' ';
            }
        }
        str = str + '*';
        console.log(str);
    }
}

function stars7(number) {
    for (var i = 0; i < number; i++) {
        var str = ' ';
        for (var j = 0; j < number; j++) {
            if (i === j || (i + j) === number - 1) {
                str = str + '*';
            }
            else str = str + ' ';
        }
        console.log(str);
    }
}

function stars8(number) {
    for (var i = 0; i < number - 3; i++) {
        var str = '';
        if (i === 0) {
            for (var j = 0; j < number; j++) {
                str = str + '*';
            }
        } else {
            for (var j = 0; j < number; j++) {
                if (i === j || (i + j) === number - 1) {
                    str = str + '*';
                }
                else str = str + ' ';
            }
        }
        console.log(str);
    }
}

function stars9(number) {
    for (var i = 3; i <= number; i++) {
        var str = '';
        if (i !== number - 1) {
            for (var j = 0; j < number; j++) {
                if (i === j || (i + j) === number - 1) {
                    str = str + '*';
                }
                else str = str + ' ';
            }
        } else {
            for (var j = 0; j < number; j++) {
                str = str + '*';
            }
        }
        console.log(str);
    }
}