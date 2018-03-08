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

const allClear = () => {
    console.log("All clear...");
    display.innerHTML = '';
    equation.innerHTML = '';
    operatorClicked = false;
    equalClicked = false;
};

const clearEntry = () => {
  return () => {
    if(equalClicked) {
      allClear();
    } else {
        console.log("Clear entry..");
        display.innerText = '';
        console.log("Equation is currently:", equation.innerText);
      }
  }
}

const displayKey = (i) => {
  return () => {
    if (!display.hasChildNodes() && /[^1-9]/g.test(key[i].innerText)) {
      console.log("Can't start with a zero...");
      return false;
    }

    if (/=/.test(equation.innerText)) {
      if (/[^1-9]/g.test(key[i].innerText)) {
        console.log("Can't start with a zero...");
        return false;
      } else {
          console.log("Calculation complete!");
          equalClicked = false;
          allClear();
        }
    }
    console.log("You clicked on key " + key[i].innerText);
    //display.innerText = key[i].innerText;
    let keyInput = document.createTextNode(key[i].innerText);
    display.appendChild(keyInput);
    //equation.appendChild(keyInput); 
    operatorClicked = false;
    equalClicked = false;

    }
};

const numberEntry = (i) => {
  return () => {
    if (operatorClicked) {
      console.log("Too many operator key entries, bro...");
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
    if (equalClicked) {
      console.log("Can't enter the equal key again, bro...");
      return false;
    } 
    else {
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
    }
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


