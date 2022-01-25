const { Calculator, Engineering } = require('../Calculator');

describe('methods in Calculator', () => {
    test('clear', () => {
        const calculator = new Calculator();
        calculator.current = '123';
        calculator.clear();
        expect(calculator.current).toBe('');
    })
    test('delete', () => {
        const calculator = new Calculator();
        calculator.current = '123';
        calculator.delete();
        expect(calculator.current).toBe('12');
    })
    test('chooseOperation check default operation', () => {
        const calculator = new Calculator();
        expect(calculator.operation).toBeUndefined();
    })
    test('chooseOperation', () => {
        const calculator = new Calculator();
        calculator.current = 5;
        calculator.chooseOperation('+');
        const obj = {
            oper: calculator.operation,
            prev: calculator.previous,
            cur: calculator.current,
        }
        expect(obj).toStrictEqual({ "cur": "", "oper": "+", "prev": 5 });
    })
    test('get percent', () => {
        const calculator = new Calculator();
        calculator.current = '1';
        calculator.getPersent();
        expect(calculator.current).toBe(0.01);
    })
    test('change sing', () => {
        const calculator = new Calculator();
        calculator.current = '1';
        calculator.singChange();
        expect(calculator.current).toBe(-1);
    })
})

describe('addNumber', () => {
    test('one number', () => {
        const calculator = new Calculator();
        calculator.current = '';
        calculator.addNumber(7);
        expect(calculator.current).toBe('7');
    })
    test('consecutive two digits', () => {
        const calculator = new Calculator();
        calculator.current = '';
        calculator.addNumber(7);
        calculator.addNumber(1);
        expect(calculator.current).toBe('71');
    })
    test('number + float', () => {
        const calculator = new Calculator();
        calculator.current = '';
        calculator.addNumber(7);
        calculator.addNumber('.');
        expect(calculator.current).toBe('7.');
    })
    test('numbers and dots', () => {
        const calculator = new Calculator();
        calculator.current = '';
        calculator.addNumber(7);
        calculator.addNumber('.');
        calculator.addNumber(1);
        calculator.addNumber('.');
        expect(calculator.current).toBe('7.1');
    })
})

describe('getAnswer', () => {
    test('addition of numbers', () => {
        const calculator = new Calculator();
        calculator.current = '5';
        calculator.previous = '5';
        calculator.operation = '+';
        calculator.getAnswer();
        expect(calculator.current).toBe(10);
    })
    test('number subtraction', () => {
        const calculator = new Calculator();
        calculator.current = '5';
        calculator.previous = '5';
        calculator.operation = '-';
        calculator.getAnswer();
        expect(calculator.current).toBe(0);
    })
    test('division of numbers', () => {
        const calculator = new Calculator();
        calculator.current = '5';
        calculator.previous = '5';
        calculator.operation = '/';
        calculator.getAnswer();
        expect(calculator.current).toBe(1);
    })
    test('multiplication numbers', () => {
        const calculator = new Calculator();
        calculator.current = '5';
        calculator.previous = '5';
        calculator.operation = '*';
        calculator.getAnswer();
        expect(calculator.current).toBe(25);
    })
    test('pow x^y', () => {
        const calculator = new Calculator();
        calculator.clear();
        calculator.previous = '2';
        calculator.current = '3';
        calculator.operation = '^';
        calculator.getAnswer();
        expect(calculator.current).toBe(8);
    })
    test('yRadicX', () => {
        const calculator = new Calculator();
        calculator.clear();
        calculator.previous = '5';
        calculator.current = '4';
        calculator.operation = 'yRadicX';
        calculator.getAnswer();
        expect(calculator.current).toBe(10);
    })
    test('mod', () => {
        const calculator = new Calculator();
        calculator.clear();
        calculator.previous = '5';
        calculator.current = '2';
        calculator.operation = 'mod';
        calculator.getAnswer();
        expect(calculator.current).toBe(1);
    })
    test('default ', () => {
        const calculator = new Calculator();
        calculator.current = '5';
        calculator.previous = '5';
        calculator.operation = ' ';
        calculator.getAnswer();
        expect(calculator.current).toBe('5');
    })
})

describe('methods in Engineering', () => {
    test('pi', () => {
        const eng = new Engineering();
        eng.returnValue('pi');
        expect(eng.current).toBe(3.141592653589793);
    })
    test('e', () => {
        const eng = new Engineering();
        eng.returnValue('e');
        expect(eng.current).toBe(2.718281828459045);
    })
    test('10x', () => {
        const eng = new Engineering();
        eng.current = '2'
        eng.returnValue('10x');
        expect(eng.current).toBe(100);
    })
    test('x2', () => {
        const eng = new Engineering();
        eng.current = '2'
        eng.returnValue('x2');
        expect(eng.current).toBe(4);
    })
    test('x3', () => {
        const eng = new Engineering();
        eng.current = '2'
        eng.returnValue('x3');
        expect(eng.current).toBe(8);
    })
    test('exp', () => {
        const eng = new Engineering();
        eng.current = '2'
        eng.returnValue('exp');
        expect(eng.current).toBe(7.38905609893065);
    })
    test('2radicX', () => {
        const eng = new Engineering();
        eng.current = '2'
        eng.returnValue('2radicX');
        expect(eng.current).toBe(2.8284271247461903);
    })
    test('3radicX', () => {
        const eng = new Engineering();
        eng.current = '2'
        eng.returnValue('3radicX');
        expect(eng.current).toBe(4.242640687119286);
    })
    test('1/x', () => {
        const eng = new Engineering();
        eng.current = '2'
        eng.returnValue('1/x');
        expect(eng.current).toBe(0.5);
    })
    test('ln', () => {
        const eng = new Engineering();
        eng.current = '2'
        eng.returnValue('ln');
        expect(eng.current).toBe(0.6931471805599453);
    })
    test('log', () => {
        const eng = new Engineering();
        eng.current = '2'
        eng.returnValue('log');
        expect(eng.current).toBe(0.3010299956639812);
    })
    test('factorail with correct number', () => {
        const eng = new Engineering();
        eng.current = '5'
        eng.returnValue('factorail');
        expect(eng.current).toBe(120);
    })
    test('factorail with incorrect number', () => {
        const eng = new Engineering();
        eng.current = '-5'
        eng.returnValue('factorail');
        expect(eng.current).toBe(NaN);
    })
    test('sin', () => {
        const eng = new Engineering();
        eng.current = '0'
        eng.returnValue('sin');
        expect(eng.current).toBe(0);
    })
    test('cos', () => {
        const eng = new Engineering();
        eng.current = '0'
        eng.returnValue('cos');
        expect(eng.current).toBe(1);
    })
    test('tan', () => {
        const eng = new Engineering();
        eng.current = '0'
        eng.returnValue('tan');
        expect(eng.current).toBe(0);
    })
    test('sinh', () => {
        const eng = new Engineering();
        eng.current = '0'
        eng.returnValue('sinh');
        expect(eng.current).toBe(0);
    })
    test('cosh', () => {
        const eng = new Engineering();
        eng.current = '0'
        eng.returnValue('cosh');
        expect(eng.current).toBe(1);
    })
    test('tanh', () => {
        const eng = new Engineering();
        eng.current = '0'
        eng.returnValue('tanh');
        expect(eng.current).toBe(0);
    })
    test('module', () => {
        const eng = new Engineering();
        eng.current = '-2'
        eng.returnValue('module');
        expect(eng.current).toBe(2);
    })
    test('default eng', () => {
        const eng = new Engineering();
        eng.current = '5';
        eng.returnValue(' ');
        expect(eng.current).toBe('5');
    })
})