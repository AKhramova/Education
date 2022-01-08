function inputValueSet(id, value) {
    const input = document.getElementById(id);
    if (input) {
        input.value = value;
        return true;
    }
    return false;
}

function setHTMLValue(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.innerHTML = value;
        return true;
    }
    return false;
}

function inputValueGet(id) {
    const input = document.getElementById(id);
    if (input) {
        return input.value;
    }
    return '';
}

function inputDisabled(id, boolean) {
    const input = document.getElementById(id);
    if (input) {
        return input.disabled = boolean;
    }
}

function addListener(id, eventType, cb) {
    const node = document.getElementById(id)
    if (node) {
        node.addEventListener(eventType, cb)
        return true
    }
    return false
}

function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

module.exports = { inputValueSet, setHTMLValue, inputValueGet, addListener, randomNumber, inputDisabled };
