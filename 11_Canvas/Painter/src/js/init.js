document.addEventListener('DOMContentLoaded', function () {
    init();
})

function init() {
    const ctx = getContextFunc('canvas');
    const painter = new Painter(ctx);
    addListener('canvas', 'mousemove', painter.draw.bind(null, ctx));
    addListener('clear', 'click', painter.clearCanvas.bind(null, ctx, canvas));
    addListener('save-picture', 'click', savePicture.bind(null, getNode('canvas')));
    addListener('save-json', 'click', saveJson.bind(null, getNode('canvas')));
    addListener('color', 'change', setValue.bind(null, 'color', painter.changeColor.bind(painter)));
    addListener('size', 'change', setValue.bind(null, 'size', painter.changeSize.bind(painter)));
}

function setValue(id, cb) {
    cb(getNodeValue(id));
}
