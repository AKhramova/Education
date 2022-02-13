export function getNode(id) {
    const node = document.getElementById(id);
    if (node) {
        return node;
    }
    return false;
}
export function setValue(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.value = value;
        return true;
    }
    return false;
}

export function addListener(id, eventType, cb) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, cb);
        return true;
    }
    return false;
}

export function getContextFunc(id) {
    const node = document.getElementById(id);
    if (node) {
        return node.getContext('2d');
    }
    return false
}

export function setHTMLValue(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.innerHTML = value;
        return true;
    }
    return false;
}

export function getNodeSelectorAll(selector) {
    const node = document.querySelectorAll(`[${selector}]`);
    if (node) {
        return node;
    }
    return false;
}