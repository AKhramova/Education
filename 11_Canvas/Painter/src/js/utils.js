function getNode(id) {
    const node = document.getElementById(id);
    if (node) {
        return node;
    }
    return false;
}
function getNodeValue(id) {
    const node = document.getElementById(id);
    if (node) {
        return node.value;
    }
    return '';
}

function addListener(id, eventType, cb) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, cb);
        return true;
    }
    return false;
}

function getContextFunc(id) {
    const node = document.getElementById(id);
    if (node) {
        return node.getContext('2d');
    }
    return false
    
}
module.exports = { getNode, getNodeValue, addListener, getContextFunc };
