document.getElementById('exit').addEventListener('click', () => {
    document.getElementById('minValue').disabled = false;
    document.getElementById('maxValue').disabled = false;
    document.getElementById('attempts').disabled = false;
    document.getElementById('generate').disabled = false;
    document.getElementById('play').disabled = true;
    document.getElementById('minValue').value = 1;
    document.getElementById('maxValue').value = 100;
    document.getElementById('attempts').value = 5;
    document.getElementById('answer').value = '';
    document.getElementById('helloText').innerHTML = '';
    document.getElementById('infoText').innerHTML = '';
    count = 0;
})