class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }

    clear() {
        this.current = '';
        this.previous = '';
        this.operation = undefined;
    }

    delete() {
        this.current = String(this.current).slice(0, -1);
    }
    addNumber(number) {
        if (number === '.' && this.current.includes('.')) return
        this.current = this.current + number;
    }

    chooseOperation(mathOper) {
        this.operation = mathOper;
        this.previous = this.current;
        this.current = '';
    }

    getAnswer() {
        switch (this.operation) {
            case '+':
                this.current = parseFloat(this.previous) + parseFloat(this.current);
                break;
            case '-':
                this.current = parseFloat(this.previous) - parseFloat(this.current);
                break;
            case '/':
                this.current = parseFloat(this.previous) / parseFloat(this.current);
                break;
            case '*':
                this.current = parseFloat(this.previous) * parseFloat(this.current);
                break;
            case '^': 
                this.current = Math.pow(Number(this.previous), Number(this.current));
                break;
            case 'yRadicX': 
                this.current = Number(this.previous) * Math.sqrt(Number(this.current));
                break;
            case 'mod': 
                this.current = parseFloat(this.previous) % parseFloat(this.current);
                break;
            default:
                return
        }
    }
    getPersent() {
        this.current = parseFloat(this.current) / 100;
    }
    singChange() {
        this.current = this.current * (-1);
    }
    updateDisplay() {
        this.currentOperand.value = this.current;
    }
}

class Engineering extends Calculator {
    returnValue(valueBtn) {
        switch (valueBtn) {
            case 'rand':
                this.current = randomNumber();
                break;
            case 'pi':
                this.current = Math.PI;
                break;
            case 'e':
                this.current = Math.E;
                break;
            case '10x':
                this.current = Math.pow(10, Number(this.current));
                break;
            case 'x2':
                this.current = Math.pow(Number(this.current), 2);
                break;
            case 'x3':
                this.current = Math.pow(Number(this.current), 3);
                break;
            case 'exp':
                this.current = Math.exp(Number(this.current))
                break;
            case '2radicX':
                this.current = 2 * Math.sqrt(this.current);
                break;
            case '3radicX':
                this.current = 3 * Math.sqrt(this.current);
                break;
            case '1/x':
                this.current = 1 / Number(this.current);
                break;
            case 'ln':
                this.current = Math.log(this.current);
                break;
            case 'log':
                this.current = Math.log10(this.current);
                break;
            case 'factorail':
                if (this.current >= 0 && this.current % 1 === 0) {
                    let result = 1;
                    for (let i = 1; i <= this.current; i++) {
                        result *= i;
                    }
                    this.current = result;
                } else {
                    this.current = NaN;
                }
                break;
            case 'sin':
                this.current = Math.sin(this.current);
                break;
            case 'cos':
                this.current = Math.cos(this.current);
                break;
            case 'tan':
                this.current = Math.tan(this.current);
                break;
            case 'sinh':
                this.current = Math.sinh(this.current);
                break;
            case 'cosh':
                this.current = Math.cosh(this.current);
                break;
            case 'tanh':
                this.current = Math.tanh(this.current);
                break;
            case 'module':
                this.current = Math.abs(this.current);
                break;
            default:
                return
        }
    }
}

module.exports = { Calculator, Engineering }
