export function drawCircles(data, ctx, distanceValue) {
    for (let i = 0; i < data.length; i++){
        const dis = distanceValue * (i + 1) + 2;
        const x = 0;
        addText(ctx, data[i].name, dis, 70);
        addText(ctx, 'balance', dis, 220);
        addText(ctx, 'age', dis, 380);
        addText(ctx, 'documents', dis, 520);
        addText(ctx, 'english', dis, 700);
        drawCirclesHelper(ctx, 100, dis, 'black');
    }
}

function addText(ctx, text, distance, start) {
    ctx.beginPath();
    ctx.font = "italic 24px Arial";
    ctx.fillText(text, start - text.length * 2, distance);
    ctx.closePath();
}

export function drawCirclesHelper(ctx, start, distance, color) {
    ctx.beginPath();
    ctx.arc(start, distance, 42, 0, 2 * Math.PI, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}