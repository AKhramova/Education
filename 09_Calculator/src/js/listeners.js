const numberBtn = document.querySelectorAll('[data-number]');
const operationsBtn = document.querySelectorAll('[data-operations]');
const eng = new Engineering(getNode('previous'), getNode('current'));
const engBtn = document.querySelectorAll('[data-engineering]');

engBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        eng.returnValue(btn.value);
        eng.updateDisplay();
    })
})

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        eng.addNumber(button.value);
        eng.updateDisplay();
    })
})

getNode('clear').addEventListener('click', () => {
    eng.clear();
    eng.updateDisplay();
})

getNode('delete').addEventListener('click', () => {
    eng.delete();
    eng.updateDisplay();
})

getNode('sing-change').addEventListener('click', () => {
    eng.singChange();
    eng.updateDisplay();
})

operationsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        eng.chooseOperation(btn.value);
    })
})

getNode('equals').addEventListener('click', () => {
    eng.getAnswer();
    eng.updateDisplay();
})

getNode('percent').addEventListener('click', () => {
    eng.getPersent();
    eng.updateDisplay();
})