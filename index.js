const operator = document.querySelectorAll(".operator")
const ouputValue = document.querySelector(".output-value")
const textDisplay = document.querySelector(".text-display")
const numbers = document.querySelectorAll(".numbers")



//Funcion para limpiar pantalla
const clean = () => {
  textDisplay.innerText = ""
}

//Inicia la operacion tomando el operador y los valores con la funcion resultado y limpia la pantalla
const operation = (operador) => {
  calculator.currentOperator = operador
  results()
  clean()
}

//Evalua que es lo que tiene valueA y si esta vacio pone el valor + el operador 
const results = () => {
  if (calculator.valueA == "") {
    calculator.valueA = textDisplay.innerText
    calculator.prevOperator = calculator.currentOperator
    return
  }

  calculator.valueB = textDisplay.innerText
  
  const result = eval(
    `${calculator.valueA} ${calculator.prevOperator} ${calculator.valueB}`
  )

  calculator.valueA = result
  ouputValue.innerText = result
  calculator.prevOperator = calculator.currentOperator
  
}

//Objeteo con los valores vacios y operadores
const calculator = {
  valueA: "",
  valueB: "",
  currentOperator: "",
  prevOperator: ""
}


//operadores con la funcion a ejecutar para la operacion
const operators = {
  C: () => {
    clean()
    for (const item in calculator) {
      calculator[item] = ""
    }
  },
  "+": () => operation("+"),
  "-": () => operation("-"),
  X: () => operation("*"),
  "/": () => operation("/"),
  "=": () => results(),
}


for (const button of numbers) {
  button.addEventListener("click", (evt) => {
    if (operators[evt.target.innerText]) {
      operators[evt.target.innerText]()
      return
    }
    textDisplay.innerText += evt.target.innerText
    
  })
}

