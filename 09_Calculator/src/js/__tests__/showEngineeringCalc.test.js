const { showEngineering } = require('../showEngineeringCalc');

describe('open and close Engineering calculator', function () {
    const mockedElementDOM = { classList: { contains: jest.fn(), remove: jest.fn(), add: jest.fn() } };
    test('should add the class to switch', () => {
        mockedElementDOM.classList.contains.mockReturnValueOnce(false);
        showEngineering(mockedElementDOM, mockedElementDOM);
        expect(mockedElementDOM.classList.add).toBeCalledWith('rorate');
        expect(mockedElementDOM.classList.add).toBeCalledWith('show');
    });
    test('should remove the class to swith', () => {
        mockedElementDOM.classList.contains.mockReturnValueOnce(true);
        showEngineering(mockedElementDOM, mockedElementDOM);
        expect(mockedElementDOM.classList.remove).toBeCalledWith('rorate');
        expect(mockedElementDOM.classList.remove).toBeCalledWith('show');
    });
})
