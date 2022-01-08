const { inputValueSet, setHTMLValue, inputValueGet, addListener, randomNumber, inputDisabled } = require("./utils");
const { isValidInput } = require('./isValidInput');

document.addEventListener('DOMContentLoaded', function () {
    init();
})

function init() {
    const state = {
        minValue: 1,
        maxValue: 100,
        attempts: 5,
        count: 0,
        answer: null,
        rand: null,
        isGenerate: true
    };
    addListener('generate', 'click', generateFunction.bind(null, state));
    addListener('play', 'click', playGame.bind(null, state));
    addListener('exit', 'click', exitFunc.bind(null, state));
}

function generateFunction(state) {
    state.minValue = inputValueGet('minValue');
    state.maxValue = inputValueGet('maxValue');
    state.attempts = inputValueGet('attempts');
    state.answer = inputValueGet('answer');
    if (isValidInput(state.minValue, state.maxValue, state.attempts) !== false) {
        if (state.isGenerate) {
            state.rand = randomNumber(state.minValue, state.maxValue);
        }
        const text = `Привет, я загадал число от ${state.minValue} до ${state.maxValue} вашего диапазона.Попробуй угадать его за ${state.attempts} попыток!`;
        setHTMLValue('helloText', text);
        setHTMLValue('infoText', '');
        inputDisabled('minValue', true);
        inputDisabled('maxValue', true);
        inputDisabled('attempts', true);
        inputDisabled('generate', true);
        inputDisabled('play', false);
        state.isGenerate = false;
    } else {
        setHTMLValue('infoText', 'Вы не правильно ввели значение ' + '\u{2639}');
    }
}
