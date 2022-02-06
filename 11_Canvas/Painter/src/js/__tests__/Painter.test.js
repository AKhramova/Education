const { Painter, savePicture, saveJson } = require('../Painter');
require('jest-canvas-mock');

jest.mock('../utils.js', () => {
    const originalModule = jest.requireActual('../utils.js');
    return {
        __esModule: true,
        ...originalModule,
        getNode: jest.fn(() => true),
        getNodeValue: jest.fn(() => true),
        addListener: jest.fn(() => true),
        getContextFunc: jest.fn(() => true)
    };
});

describe('Painter, draw', () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const painter = new Painter(ctx);
    test('ctx not to be undefined', () => {
        expect(ctx).not.toBeUndefined();
    })
    test('draw', () => {
        const e = { preventDefault: () => { } };
        expect(painter.draw(ctx, e)).toBe();
    })
    test('changeColor', () => {
        expect(painter.changeColor('#981010')).toBe();
    })
    test('changeSize', () => {
        expect(painter.changeSize(10)).toBe();
    })
    test('clearCanvas', () => {
        expect(painter.clearCanvas(ctx, canvas)).toBe();
    })
})

describe('savePicture, saveJson', () => {
    const canvas = document.createElement("canvas");
    test('savePicture', () => {
        expect(savePicture(canvas)).toBe();
    })
    test('saveJson', () => {
        expect(saveJson(canvas)).toBe();
    })
})