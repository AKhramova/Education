const { Circle, init, addCircle, draw } = require('../init');
require('jest-canvas-mock');

jest.mock('../utils.js', () => {
    const originalModule = jest.requireActual('../utils.js');
    return {
        __esModule: true,
        ...originalModule,
        addListener: jest.fn(() => true),
        getContextFunc: jest.fn(() => true),
        getRadius: jest.fn(() => 25),
        getColor: jest.fn(() => 'rgba(255, 0, 71, 0.7)'),
        getX: jest.fn(() => 254),
        getY: jest.fn(() => 145),
        getSpeed: jest.fn(() => 15),
    };
});

describe('Painter, draw', () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const state = {
        circles: []
    }

    test('ctx not to be undefined', () => {
        expect(ctx).not.toBeUndefined();
    })

    test('addCircle', () => {
        const mock = {
            getX: 254,
            getY: 145,
            getRadius: 25,
            getColor: 'rgba(255, 0, 71, 0.7)',
            getSpeed: 15
        }
        function addCircle(state) {
            state.circles.push(new Circle(mock.getX, mock.getY, mock.getRadius, mock.getColor, mock.getSpeed, mock.getSpeed));
            return state.circles
        }
        expect(addCircle(state)).toEqual([{ "color": "rgba(255, 0, 71, 0.7)", "dx": 15, "dy": 15, "radius": 25, "x": 254, "y": 145 }]);
    })
    test('move', () => {
        const circles = new Circle(0, 0, 15, 'rgba(255, 0, 71, 0.7)', 15, 15);
        expect(circles.move()).toBe();
    })
    test('move with  x = 0', () => {
        const circles = new Circle(0, 5, 15, 'rgba(255, 0, 71, 0.7)', 10, 15);
        expect(circles.move()).toBe();
    })
    test('move with x = 0 and y = 0', () => {
        const circles = new Circle(0, 0, 15, 'rgba(255, 0, 71, 0.7)', 10, 15);
        expect(circles.move()).toBe();
    })
    test('draw', () => {
        expect(draw(state, ctx, canvas)).toBe();
    })
})