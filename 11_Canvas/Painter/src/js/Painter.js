class Painter {
    constructor(ctx) {
        this.ctx = ctx;
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 5;
    }
    
    draw(ctx, e) {
        const x = e.offsetX;
        const y = e.offsetY;
        const dx = e.movementX;
        const dy = e.movementY;
        ctx.lineCap = 'round';
        if (e.buttons > 0) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - dx, y - dy);
            ctx.stroke();
            ctx.closePath();
        }
    }

    changeColor(value) {
        this.ctx.strokeStyle = value;
    }

    changeSize(value) {
        this.ctx.lineWidth = value;
    }

    clearCanvas(ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function savePicture(canv) {
    let img = document.createElement('a');
    document.body.appendChild(img);
    img.href = canv.toDataURL();
    img.download = 'img.png';
    img.click();
    document.body.removeChild(img);
}

function saveJson(canv) {
    let json = document.createElement('a');
    document.body.appendChild(json);
    json.href = canv.toDataURL();
    json.download = 'img-canvas.json';
    json.click();
    document.body.removeChild(json);
}

module.exports = { Painter, savePicture, saveJson }