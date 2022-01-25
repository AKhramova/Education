function getNode(id) {
    const node = document.getElementById(id);
    if (node) {
        return node;
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

function randomNumber() {
    return (Math.random() * 1).toFixed(2);
}

module.exports = { getNode, addListener, randomNumber };
