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
let temporaryOperand;
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
  if(number === "." && screenSecOperand.includes(".")) return;
  if(number === 0 && screenSecOperand === "0") return;
  if(screenSecOperand.length > 8) return;
  screenSecOperand = screenSecOperand.toString() + number.toString();
  DisplayNumbers();
}

function ChooseOperation(selectedOperation) {
  if(temporaryOperand){
    screenOneOperand = temporaryOperand.toString();
    screenSecOperand = "";
    temporaryOperand = "";
    operation = selectedOperation;
    DisplayNumbers();
    return;
  }

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

  if(!operation) return ;
  if(isNaN(previous) || isNaN(current)) return;


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

  if(isNaN(computation)) return;

  screenOneOperand = computation;
  screenSecOperand = "";
  operation = undefined;
  DisplayNumbers();
  temporaryOperand = screenSecOperand;
  screenSecOperand = "";
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
    temporaryOperand = "";
  });
}

comma.addEventListener("click", ()=> {
  AppendNumber(".");
});
