let screen = document.getElementById("screen");
let display = document.getElementById("display");
let equation = document.getElementById("equation");
let entryLog = document.getElementById("entryLog");
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
    display.innerHTML = 0;
    equation.innerHTML = 0;
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
    if(/0/g.test(display.innerText[0])) {
      console.log("Replace leading zero...");
      display.removeChild(display.childNodes[0]);
    }

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
          display.removeChild(display.childNodes[0]);
        }
    }

    console.log("You clicked on key " + key[i].innerText);
    let keyInput = document.createTextNode(key[i].innerText);
    display.appendChild(keyInput);
    operatorClicked = false;
    equalClicked = false;

    }
};

const displayKey = (i) => {
  return () => {
    if(/0/g.test(display.innerText[0])) {
      console.log("Replace leading zero...");
      display.removeChild(display.childNodes[0]);
    }

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
          display.removeChild(display.childNodes[0]);
        }
    }

    console.log("You clicked on key " + key[i].innerText);
    let keyInput = document.createTextNode(key[i].innerText);
    display.appendChild(keyInput);
    operatorClicked = false;
    equalClicked = false;

    }
};


const operatorEntry = (i) => {
  return () => {

    if (/0/g.test(equation.innerText[0])) {
      console.log("Replace leading zero...");
      equation.removeChild(equation.childNodes[0]);
    }

    if (operatorClicked) {
      console.log("Too many operator key entries, bro...");
      return false;
    } else if (equalClicked) {
        equation.innerHTML = '';
        let entry = document.createTextNode(display.innerText);
        equation.appendChild(entry);
        let operation = document.createTextNode(operator[i].innerText);
        equation.appendChild(operation);
        display.innerText = '';
        operatorClicked = true;
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
      let entry = document.createTextNode(display.innerText);
      equation.appendChild(entry);
      let answer = 0;
      let eq = equation.innerText;
      console.log("Initial equation...", equation.innerText);
      eq = eq.replace(/×/, "*");
      eq = eq.replace(/÷/, "/");
      answer = eval(eq);
      console.log("This equation is:", eq);
      console.log("The answer is:", answer);
      let equalTo = document.createTextNode(equals.innerText);
      equation.appendChild(equalTo);
      display.innerText = answer;
      let keyInput = document.createTextNode(answer);
      equation.appendChild(keyInput);
      equalClicked = true;
      console.log("Final equation...", equation.innerText);
    }
  }
}

// const addItemFeatures = (i) => {
//   displayKey(i);
// }

display.innerHTML = 0;
equation.innerHTML = 0;

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener("click", displayKey(i));
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", operatorEntry(i));
}

equals.addEventListener("click", calculate());

ac.addEventListener("click", allClear);
ce.addEventListener("click", clearEntry());


