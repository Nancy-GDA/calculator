const operator = document.querySelectorAll('.operator')
const ouputValue = document.querySelector('.output-value')
const textDisplay = document.querySelector('.text-display');
const numbers = document.querySelectorAll('.numbers')


const limpiar = () => {
    textDisplay.innerText = ''
}

const valor1 =  (operador)  => {
    calculator.numberA = Number(textDisplay.innerText)
    calculator.operator = operador
    limpiar()
}

const resultado = () => {
    calculator.numberB = Number(textDisplay.innerText)
    textDisplay.innerText = calculator.numberA + calculator.numberB
}

const calculator = {
    numberA: 0,
    numberB: 0,
    operator: ''
}


const operators = {
    'C': () => limpiar(),
    '+': () => valor1('+'),
    '-': () => valor1('-'),
    'X': () => valor1('*'),
    '/': () => valor1('/'),
    '=': () => resultado()
}

for(const button of numbers){
    button.addEventListener('click', (evt) => {
        if (operators[evt.target.innerText]) {
            operators[evt.target.innerText]()
            return
        }

        textDisplay.innerText += evt.target.innerText
    })
}

