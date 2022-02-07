document.addEventListener('DOMContentLoaded', function () {
    init(getContextFunc('canvas'));
})

function init(ctx) {
    const state = {
        circles: []
    }
    addListener('canvas', 'click', addCircle.bind(null, state));
    setInterval(draw.bind(null, state, ctx, canvas), 20);
}

class Circle {
    constructor(x, y, radius, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
    }

    move() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.x = -this.x;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.y = -this.y;
        }
        if (this.x - this.radius + this.dx < 0 || this.x + this.radius + this.dx > innerWidth) {
            this.dx = -this.dx;
        }
        if (this.y - this.radius + this.dy < 0 || this.y + this.radius + this.dy > innerHeight) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}

function addCircle(state) {
    state.circles.push(new Circle(getX(event), getY(event), getRadius(), getColor(), getSpeed(), getSpeed()));
}

function draw(state, ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const circles = state.circles;
    for (let i = 0; i < circles.length; i++) {
        ctx.beginPath();
        ctx.arc(circles[i].x, circles[i].y, circles[i].radius, 0, Math.PI * 2);
        ctx.fillStyle = circles[i].color;
        ctx.fill();
        ctx.closePath();
        circles[i].move();
    }
}

module.exports = { Circle, init, addCircle, draw }
