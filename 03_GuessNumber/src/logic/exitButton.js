exit.addEventListener('click', () => {
    minValue.disabled = false;
    maxValue.disabled = false;
    attempts.disabled = false;
    generate.disabled = false;
    play.disabled = false;
    minValue.value = 1;
    maxValue.value = 100;
    attempts.value = 5;
    count = 0;
    helloText.innerHTML = '';
    infoText.innerHTML = '';
})