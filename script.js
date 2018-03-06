let screen = document.getElementsByClassName("screen");
let key = document.getElementsByClassName("key");
let zeroKey = document.getElementById("zerokey");


const displayKey = (i) => {
  return () => { console.log("you clicked on key " + key[i].innerText);}
};

const addItemFeatures = (key) => {
  displayKey(key);
}

// for (i in key) {
//   function(index) {
//     imageArray[index].addEventListener("click", function () {
//       console.log("You clicked key: ", index);
//         });
//   } (i);
// }

// for (var i = 0; i < key.length; i++) {
//   key[i].addEventListener("click", bindClick(i));
// }

for (var i = 0; i < key.length; i++) {
  key[i].addEventListener("click", displayKey(i));
}

function bindClick(i) {
  return function () {
    console.log("you clicked on key " + key[i].innerText);
  };
}

key[4].addEventListener("click", function () { console.log(key[4].innerText) });


// zeroKey.forEach(addItemFeatures);
