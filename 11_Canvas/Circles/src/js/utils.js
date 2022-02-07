function addListener(id, eventType, cb) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, cb);
        return true;
    }
    return false;
}

function getContextFunc(id) {
    const canvas = document.getElementById(id);
    if (canvas) {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        return canvas.getContext('2d');
    }
    return false
    
}

function getRadius() {
    return Math.floor(MIN_RADIUS + Math.random() * (MAX_RADIUS + 1 - MIN_RADIUS));
}

function getColor() {
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    const a = (Math.random() + 0.3).toFixed(1);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function getX(e) {
    return e.clientX - canvas.offsetLeft;
}

function getY(e) {
    return e.clientY - canvas.offsetTop;
}

function getSpeed() {
    return Math.floor(MIN_SPEED + Math.random() * (MAX_SPEED + 1 - MIN_SPEED));
}

module.exports = { addListener, getContextFunc, getRadius, getColor, getX, getY, getSpeed };
