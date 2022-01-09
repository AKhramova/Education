const { setHTMLValue, inputValueGet, addListener, randomNumber, inputDisabled } = require("./utils");

document.addEventListener('DOMContentLoaded', function () {
    init();
})

function init() {
    let state = {
        min: 1,
        max: 100,
        isGenerate: false,
        arrayAnswer: []
    };
    addListener('generate', 'click', generateFunc.bind(null, state));
    addListener('reset', 'click', reset.bind(null, state));
}

function isNumber(min, max) {
    for (let i = 0; i < arguments.length; i++) {
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

function arrValues(a, b) {
    let arrayValue = [];
    for (let i = a; i <= b; i++) {
        arrayValue.push(i);
    }
    return arrayValue;
}

function randomAnswer(max, arrayValue, arrayAnswer) {
    let random = randomNumber(0, max);
    arrayAnswer.push(arrayValue[random]);
    arrayValue.splice(random, 1);
    return arrayAnswer;
}

function generateFunc(state) {
    state.min = Number(inputValueGet('min'));
    state.max = Number(inputValueGet('max'));
    if (!state.isGenerate) {
        array = arrValues(state.min, state.max);
        state.isGenerate = true;
    }
    if (isNumber(state.min, state.max) !== false) {
        inputDisabled('min', true);
        inputDisabled('max', true);
        if (array.length !== 0) {
            setHTMLValue('info', `Generate number: ${randomAnswer(array.length, array, state.arrayAnswer)}`);
        } else {
            inputDisabled('generate', true);
            setHTMLValue('info', 'Generate number: Elements are over');
        }
    } else {
        setHTMLValue('info', 'Incorrect data');
    }
}

function reset(state) {
    inputDisabled('min', false);
    inputDisabled('max', false);
    inputDisabled('generate', false);
    setHTMLValue('info', '');
    state.isGenerate = false;
    state.arrayAnswer = [];
    array = [];
}

module.exports = { init, isNumber, arrValues, randomAnswer, generateFunc, reset }
