let screen = document.getElementsByClassName("screen");
let key = document.getElementsByClassName("key");
let zeroKey = document.getElementById("zerokey");

const displayKey = (i) => {
  return () => { 
    console.log("you clicked on key " + key[i].innerText);
    let display = screen[0];
    let keyInput = document.createTextNode(key[i].innerText);
    display.appendChild(keyInput); 
    // screen[0].innerText = key[i].innerText;

  }
};

const addItemFeatures = (i) => {
  displayKey(i);
}

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener("click", displayKey(i));
}


