jest.mock('../utils', () => {
    const originalModule = jest.requireActual('../utils');
    return {
        __esModule: true,
        ...originalModule,
        setHTMLValue: jest.fn(() => true),
        inputValueSet: jest.fn(() => true),
        inputValueGet: jest.fn(() => true),
        addListener: jest.fn(() => true),
        inputDisabled: jest.fn(() => true),
        randomNumber: jest.fn(() => 1),
    };
});
