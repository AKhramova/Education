function randomNumber(min, max) {
    const randomValue = Math.random() * (max - min) + min;
    return Math.ceil(randomValue);
}

function generateFunction(min, max, attempt, sad) {
    rand = randomNumber(minValue.value, maxValue.value);
    if (isValidInput(min, max, attempt) !== false) {
        helloText.innerHTML = `Привет, я загадал число от ${min} до ${max} вашего диапазона.Попробуй угадать его за ${attempt} попыток!`;
        minValue.disabled = true;
        maxValue.disabled = true;
        attempts.disabled = true;
        generate.disabled = true;
        play.disabled = false;
    } else {
        infoText.innerHTML = 'Вы не правильно ввели значение ' + sad;
    }
}

document.getElementById('generate').addEventListener('click', () => {
    generateFunction(minValue.value, maxValue.value, attempts.value, sad);
});
