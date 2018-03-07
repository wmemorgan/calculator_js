let screen = document.getElementById("screen");
let display = document.getElementById("display");
let equation = document.getElementById("equation");
let key = document.getElementsByClassName("key");
let zeroKey = document.getElementById("zerokey");
let equals = document.getElementById("equals");
let ac = document.getElementById("AC");
let ce = document.getElementById("CE");

const displayKey = (i) => {
  return () => { 
    console.log("you clicked on key " + key[i].innerText);
    display.innerText = key[i].innerText;
    let keyInput = document.createTextNode(key[i].innerText);
    equation.appendChild(keyInput); 
  }
};

const clearEntry = () => {
  return () => {
    console.log("Clear current entry..");
    display.innerText = 0;
    equation.removeChild(equation.childNodes[equation.childNodes.length - 2]);
    equation.removeChild(equation.childNodes[equation.childNodes.length - 1]);
    console.log("Equation is:", equation.childNodes[equation.childNodes.length - 1]);
  }
}

const calculate = () => {
  return () => {
    let eq = equation.innerText;
    eq = eq.replace(/×/, "*");
    eq = eq.replace(/÷/, "/");
    eq = eq.split('');
    eq.splice(-1, 1);
    eq = eq.join('');
    answer = eval(eq);
    console.log("This equation is:", eq);
    console.log("The answer is:", answer);
    display.innerText = answer;
    let keyInput = document.createTextNode(answer);
    equation.appendChild(keyInput); 
  }
}

// const addItemFeatures = (i) => {
//   displayKey(i);
// }

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener("click", displayKey(i));
}

equals.addEventListener("click", calculate());

ce.addEventListener("click", clearEntry());


