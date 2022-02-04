function getNode(id) {
    const node = document.getElementById(id);
    if (node) {
        return node;
    }
    return false;
}

function getArrayNodes(atr) {
    const arrayNodes = document.querySelectorAll(`[${atr}]`);
    if (arrayNodes) {
        return arrayNodes;
    }
    return false;
}

function addListener(id, eventType, cb) {
    const node = document.getElementById(id)
    if (node) {
        node.addEventListener(eventType, cb)
        return true
    }
    return false
}

module.exports = { addListener, getNode, getArrayNodes };