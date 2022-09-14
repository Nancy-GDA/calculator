const operator = document.querySelectorAll('.operator')
const ouputValue = document.querySelector('.output-value')
const textDisplay = document.querySelector(".text-display");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eigth = document.querySelector(".eigth");
const nine = document.querySelector(".nine");
const zero = document.querySelector('.zero')
const remain = document.querySelector('.remain')
const sumary = document.querySelector('.sumary-sing')
const multiplication = document.querySelector('.multiplication')
const division = document.querySelector('.division')
const point = document.querySelector('.point')
const clean = document.querySelector('.clean')

one.addEventListener("click", () => {
  textDisplay.innerText = "1";
});
two.addEventListener("click", () => {
  textDisplay.innerText = "2";
});
three.addEventListener("click", () => {
  textDisplay.innerText = "3";
});
four.addEventListener("click", () => {
  textDisplay.innerText = "4";
});
five.addEventListener("click", () => {
  textDisplay.innerText = "5";
});
six.addEventListener("click", () => {
  textDisplay.innerText = "6";
});
seven.addEventListener("click", () => {
  textDisplay.innerText = "7";
});
eigth.addEventListener("click", () => {
  textDisplay.innerText = "8";
});
nine.addEventListener("click", () => {
  textDisplay.innerText = "9";
});

zero.addEventListener('click',() => {
    textDisplay.innerText = "0";
})

point.addEventListener('click',() =>{
    textDisplay.innerText = '.'
})


remain.addEventListener('click',() =>{
    ouputValue.innerText = '-'
})

sumary.addEventListener('click',() =>{
    ouputValue.innerText = '+'
})

division.addEventListener('click',() =>{
    ouputValue.innerText = '/'
})

multiplication.addEventListener('click',() =>{
    ouputValue.innerText = 'X'
})
