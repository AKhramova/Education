const sad = '\u{2639}';
let count = 0;
let rand = null;

function isValid(min, max, attempt) {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 1 !== 0) {
            return false;
        }
        if (arguments[i] < 0) {
            return false;
        }
    }
    if (min > 200 || max > 200) {
        return false;
    }
    if (attempt > 15) {
        return false;
    }
}

function randomNumber(min, max) {
    const randomValue = Math.random() * (max - min) + min;
    return Math.ceil(randomValue);
}

function generateFunction(min, max, attempt, sad) {
    rand = randomNumber(minValue.value, maxValue.value);
    if (isValid(min, max, attempt) !== false) {
        helloText.innerHTML = `Привет, я загадал число от ${min} до ${max} вашего диапазона.Попробуй угадать его за ${attempt} попыток!`;
        minValue.disabled = true;
        maxValue.disabled = true;
        attempts.disabled = true;
        generate.disabled = true;
        play.disabled = false;
    } else {
        infoText.innerHTML = 'Вы не правильно ввели значение ' + sad;
        play.disabled = true;
    }
}

//button Play
function isValidAnswer(min, max, isAnswer) {
    if (isAnswer % 1 !== 0) {
        return false;
    }
    if (isAnswer < 0) {
        return false;
    }
    if (isAnswer < min) {
        return false
    }
    if (isAnswer > max) {
        return false;
    }
    return true
}

function checkAnswer(count, attemptValue, rand, answerValue) {
    if (count !== attemptValue) {
        if (answerValue === rand) {
            infoText.innerHTML = `Поздравляю! Ты угадал задуманное число за ${count} раза`;
        } else if (answerValue > rand) {
            infoText.innerHTML = `Большое, введи меньше число. У тебя осталось: ${attemptValue - count} попыток`;
        } else if (answerValue < rand) {
            infoText.innerHTML = `Число маленькое, введи больше. У тебя осталось:  ${attemptValue - count} попыток`;
        }
    } else {
        infoText.innerHTML = `Вы не угадал число` + sad + 'Попробуйте снова)';
        play.disabled = true;
        generate.disabled = false;
    }
}

play.addEventListener('click', () => {
    let attemptValue = Number(attempts.value);
    let answerValue = Number(answer.value);
    count++;
    if (isValidAnswer(minValue.value, maxValue.value, answerValue)) {
        return checkAnswer(count, attemptValue, rand, answerValue);
    } else {
        infoText.innerHTML = 'Вы допустили ошубку при вводу ответа' + sad;
        count--;
    }
})

generate.addEventListener('click', () => {
    generateFunction(minValue.value, maxValue.value, attempts.value, sad);
});


