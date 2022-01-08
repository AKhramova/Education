const { isValidAnswer } = require('./isValidAnswer');
function checkAnswer(state) {
    if (state.count !== state.attempts) {
        if (state.answer === state.rand) {
            setHTMLValue('infoText', `Поздравляю! Ты угадал задуманное число за ${state.count} раза`);
            inputDisabled('play', true);
        } else if (state.answer > state.rand) {
            setHTMLValue('infoText', `Большое, введи меньше число. У тебя осталось: ${state.attempts - state.count} попыток`);
        } else if (state.answer < state.rand) {
            setHTMLValue('infoText', `Число маленькое, введи больше. У тебя осталось:  ${state.attempts - state.count} попыток`);
        }
    } else {
        setHTMLValue('infoText', `Вы не угадал число` + '\u{2639}' + 'Попробуйте снова)');
        inputDisabled('play', true);
        inputDisabled('generate', true);
    }
}

function playGame(state) {
    state.minValue = inputValueGet('minValue');
    state.maxValue = inputValueGet('maxValue');
    state.attempts = Number(inputValueGet('attempts'));
    state.answer = Number(inputValueGet('answer'));
    state.count++;
    if (isValidAnswer(state.minValue, state.maxValue, state.answer)) {
        return checkAnswer(state);
    } else {
        setHTMLValue('infoText', 'Вы допустили ошубку при вводе ответа' + '\u{2639}');
        state.count--;
    }
}
