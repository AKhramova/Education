const min = document.getElementById('min');
const max = document.getElementById('max');
const generate = document.getElementById('generate');
const info = document.getElementById('info');
const reset = document.getElementById('reset');
let mainInfo = 'Generate number: ';
let isGenerate = false;
let arrayValue = [];
let arrayAnswer = [];
function isNumber(min, max) {
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] < 0) {
            return false;
        }
        if (arguments[i] % 1 != 0) {
            return false
        }
    }
    if (min > max) {
        return false;
    }
}

function randomNumber(start, finised) {
    return Math.floor(Math.random() * (finised - start) + start);
}

function createArrayValue(minV, maxV) {
    if (!isGenerate) {
        for (var i = 0; i <= maxV - minV; i++) {
            arrayValue[i] = minV + i;
        }
        isGenerate = true;
    }
    return arrayValue;
}

function randomAnswer(min, max, arr) {
    let random = randomNumber(min, max);
    arrayAnswer.push(arr[random]);
    arr.splice(random, 1);
    return arrayAnswer;
}
generate.addEventListener('click', () => {
    const minValue = Number(min.value);
    const maxValue = Number(max.value);
    if (isNumber(minValue, maxValue) !== false) {
        min.disabled = true;
        max.disabled = true;
        arrayValue = createArrayValue(minValue, maxValue);
        if (arrayValue.length !== 0) {
            info.innerHTML = mainInfo + randomAnswer(0, arrayValue.length, arrayValue);
        } else {
            generate.disabled = true;
            info.innerHTML = mainInfo + ' Elements are over';
        }
    } else {
        info.innerHTML = 'Incorrect data';
    }
})
reset.addEventListener('click', () => {
    min.disabled = false;
    max.disabled = false;
    generate.disabled = false;
    info.innerHTML = '';
    isGenerate = false;
    arrayAnswer = [];
    arrayValue = [];
})