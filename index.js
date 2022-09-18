const operator = document.querySelectorAll('.operator')
const ouputValue = document.querySelector('.output-value')
const textDisplay = document.querySelector('.text-display');
const numbers = document.querySelectorAll('.numbers')


const limpiar = () => {
    textDisplay.innerText = ''
}

const valor1 =  (operador)  => {
    calculator.numberA = textDisplay.innerText
    calculator.operator = operador
    limpiar()
}

const resultado = () => {
    calculator.numberB = textDisplay.innerText
    textDisplay.innerText = eval(`${calculator.numberA} ${calculator.operator} ${calculator.numberB}`)
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

