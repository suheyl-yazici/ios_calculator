// hesap makinesi ekranları
let screenOne = document.getElementById("screen1");
let screenSec = document.getElementById("screen2");

// hesap makinesi butonları
let ac = document.querySelector(".AC");
let change = document.querySelector(".change");
let modulus = document.querySelector(".modulus");
let divide = document.querySelector(".divide");
let button7 = document.querySelector(".button7");
let button8 = document.querySelector(".button8");
let button9 = document.querySelector(".button9");
let multiply = document.querySelector(".multiply");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");
let button6 = document.querySelector(".button6");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button0 = document.querySelector(".button0");
let minus = document.querySelector(".minus");
let add = document.querySelector(".add");
let comma = document.querySelector(".comma");
let equal = document.querySelector(".equal");

const numbersArray = [
  button0,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
];

let screenOneOperand = "";
let screenSecOperand = "";
let operation = undefined;
// Functions

function DisplayNumbers() {
  if (operation) {
    screenOne.innerHTML = `${screenOneOperand} ${operation}`;
  } else {
    screenOne.innerHTML = screenOneOperand;
  }

  screenSec.innerHTML = screenSecOperand;
}

function AppendNumber(number) {
  console.log("Number: ", number);
  screenSecOperand = screenSecOperand.toString() + number.toString();
  DisplayNumbers();
}

function ChooseOperation(selectedOperation) {
  operation = selectedOperation;
  screenOneOperand = screenSecOperand;
  ac.innerHTML = "AC";
  screenSecOperand = "";
  DisplayNumbers();
}

function Compute() {
  let computation;
  const previous = parseFloat(screenOneOperand);
  const current = parseFloat(screenSecOperand);

  switch (operation) {
    case "+":
      computation = previous + current;
      break;

    case "-":
      computation = previous - current;
      break;

    case "*":
      computation = previous * current;
      break;

    case "/":
      computation = previous / current;
      break;

    default:
      break;
  }
  screenOneOperand = computation;
  screenSecOperand = "";
  operation = undefined;
  DisplayNumbers();
}

function AllClear() {
  if (!screenOneOperand) {
    screenSecOperand = screenSecOperand.slice(0, screenSecOperand.length - 1);
  } else {
    screenOneOperand = "";
    screenSecOperand = "";
    operation = undefined;
    ac.innerHTML = "C";
  }
  DisplayNumbers();
}
function Change() {
  screenSecOperand = screenSecOperand * -1;
  DisplayNumbers();
}
function Modulus() {
  screenSecOperand = screenSecOperand / 100;
  DisplayNumbers();
}
// Add event listener to operator buttons

minus.addEventListener("click", () => {
  ChooseOperation("-");
});
add.addEventListener("click", () => {
  ChooseOperation("+");
});
multiply.addEventListener("click", () => {
  ChooseOperation("*");
});
divide.addEventListener("click", () => {
  ChooseOperation("/");
});
equal.addEventListener("click", () => {
  Compute();
});

// Add event listener to top buttons

ac.addEventListener("click", () => {
  AllClear();
});

change.addEventListener("click", () => {
  Change();
});

modulus.addEventListener("click", () => {
  Modulus();
});
// Add event listener to number buttons

for (let i = 0; i < numbersArray.length; i++) {
  const number = numbersArray[i];

  number.addEventListener("click", () => {
    AppendNumber(i);
  });
}

/* let numbers1 = [];
let numbers2 = [];


if (numbers1.length == 0){
    screenSec.innerText = 0;
}

button0.addEventListener('click',()=>{
    numbers1.push(button0.innerText)
    screenSec.innerText = Number(numbers1.join(''));

});
button1.addEventListener('click',()=>{
    numbers1.push(button1.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});
button2.addEventListener('click',()=>{
    numbers1.push(button2.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});
button3.addEventListener('click',()=>{
    numbers1.push(button3.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});
button4.addEventListener('click',()=>{
    numbers1.push(button4.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});
button5.addEventListener('click',()=>{
    numbers1.push(button5.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});
button6.addEventListener('click',()=>{
    numbers1.push(button6.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});

button7.addEventListener('click',()=>{
    numbers1.push(button7.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});

button8.addEventListener('click',()=>{
    numbers1.push(button8.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});

button9.addEventListener('click',()=>{
    numbers1.push(button9.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});

comma.addEventListener('click',()=>{
    numbers1.push(".")
    screenSec.innerText = Number(numbers1.join(''));
});

ac.addEventListener('click',()=>{
    window.location.reload(false);
}) */
