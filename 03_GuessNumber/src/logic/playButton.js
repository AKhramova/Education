function checkAnswer(count, attemptValue, rand, answerValue) {
    if (count !== attemptValue) {
        if (answerValue === rand) {
            infoText.innerHTML = `Поздравляю! Ты угадал задуманное число за ${count} раза`;
            document.getElementById('play').disabled = true;
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

document.getElementById('play').addEventListener('click', () => {
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