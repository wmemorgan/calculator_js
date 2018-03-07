let screen = document.getElementById("screen");
let display = document.getElementById("display");
let equation = document.getElementById("equation");
let key = document.getElementsByClassName("key");
let zeroKey = document.getElementById("zerokey");

const displayKey = (i) => {
  return () => { 
    console.log("you clicked on key " + key[i].innerText);
    let keyInput = document.createTextNode(key[i].innerText);
    display.innerText = key[i].innerText;
    equation.appendChild(keyInput); 
    // screen[0].innerText = key[i].innerText;

  }
};

const addItemFeatures = (i) => {
  displayKey(i);
}

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener("click", displayKey(i));
}


