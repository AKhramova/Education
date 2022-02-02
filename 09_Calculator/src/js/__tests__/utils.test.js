jest.mock('../utils.js', () => {
    const originalModule = jest.requireActual('../utils');
    return {
        __esModule: true,
        ...originalModule,
        getNode: jest
            .fn(() => true)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false),
        addListener: jest
            .fn(() => true)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false),
        randomValueMadeNumber: jest.fn(() => 0),
    };
});

describe('test', function () {
    test('test', () => {
        expect().toBe();
    });
})