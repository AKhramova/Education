const { showPhoto, openSlider, closeSlider } = require('../main');

jest.mock('../utils.js', () => {
    const originalModule = jest.requireActual('../utils');
    return {
        __esModule: true,
        ...originalModule,
        getNode: jest
            .fn(() => true)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false),
        getArrayNodes: jest
            .fn(() => true)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false),
        addListener: jest
            .fn(() => true)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false),
    };
});

describe('open and close Slider', function () {
    const mockedElementDOM = { classList: { contains: jest.fn(), remove: jest.fn(), add: jest.fn()} };
    test('should add the class to switch', () => {
        mockedElementDOM.classList.contains.mockReturnValueOnce(false);
        openSlider(mockedElementDOM);
        expect(mockedElementDOM.classList.add).toBeCalledWith('view');
    });
    test('should remove the class to swith', () => {
        mockedElementDOM.classList.contains.mockReturnValueOnce(true);
        closeSlider(mockedElementDOM);
        expect(mockedElementDOM.classList.remove).toBeCalledWith('view');
    });
})