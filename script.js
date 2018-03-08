let screen = document.getElementById("screen");
let display = document.getElementById("display");
let equation = document.getElementById("equation");
let key = document.getElementsByClassName("key");
let operator = document.getElementsByClassName("operator");
let zeroKey = document.getElementById("zerokey");
let equals = document.getElementById("equals");
let ac = document.getElementById("AC");
let ce = document.getElementById("CE");
let operatorClicked = false;
let equalClicked = false;

// const allClear = () => {
//   return () => {
//     console.log("let's clear things up...");
//     display.innerHTML = '';
//     equation.innerHTML = '';
//   }
// };

const allClear = () => {
    console.log("let's clear things up...");
    display.innerHTML = '';
    equation.innerHTML = '';
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

const displayKey = (i) => {
  return () => {
    // if (/[^1-9]/g.test(equation.childNodes[0].nodeValue)) {
    //   equation.removeChild(equation.childNodes[0]);
    // }

    // if ( /[^0-9]/g.test(key[i].innerText) 
    //     && /[^0-9]/g.test(equation.innerText[equation.innerText.length - 1])
    //   ) {
    //     console.log("Invalid key, bro...");
    //     if (!equation.hasChildNodes()) {
    //       let resetText = document.createTextNode("0");
    //       equation.appendChild(resetText);
    //     }
    //     // return equation.innerText[equation.innerText.length - 1] = 0;
    //     return false;
    // }
    if (/=/.test(equation.innerText[equation.innerText.length - 3] )) {
      console.log("Calculation complete!");
      allClear();
    }
    console.log("you clicked on key " + key[i].innerText);
    //display.innerText = key[i].innerText;
    let keyInput = document.createTextNode(key[i].innerText);
    display.appendChild(keyInput); 
    //equation.appendChild(keyInput); 
    operatorClicked = false;
  }
};

const numberEntry = (i) => {
  return () => {
    if (operatorClicked) {
      console.log("Invalid key, bro...");
      return false;
    } else {
      let entry = document.createTextNode(display.innerText);
      equation.appendChild(entry);
      let operation = document.createTextNode(operator[i].innerText);
      equation.appendChild(operation);
      display.innerText = '';
      operatorClicked = true;
    }

  }
};

const calculate = () => {
  return () => {
    let answer = 0;
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
    equalClicked = true;
    ce.addEventListener("click", allClear);
  }
}

// const addItemFeatures = (i) => {
//   displayKey(i);
// }

// display.innerHTML = 0;
// equation.innerHTML = 0;

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener("click", displayKey(i));
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", numberEntry(i));
}

equals.addEventListener("click", calculate());

ac.addEventListener("click", allClear);
ce.addEventListener("click", clearEntry());


