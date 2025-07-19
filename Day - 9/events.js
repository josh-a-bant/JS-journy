console.log("hi");

// // addEventListener
// let myDiv = document.querySelector("#container");
// myDiv.addEventListener("click", changeText);

// function changeText(event) {
//   console.log(event.target);
//   let myDiv = document.getElementById("container");
//   myDiv.textContent = "nice to meet you";
// }

// // removeEventListener
// // myDiv.removeEventListener("click", changeText);

// // prevent Default action
// let anchorTag = document.getElementById("anchor");
// anchorTag.addEventListener("click", (e) => {
//   e.preventDefault();
//   anchorTag.textContent = "click is done";
// });

// using for loop
// let paras = document.querySelectorAll("p");
// paras.forEach((para) => {
//   para.addEventListener("click", altMsg);
// });

function altMsg(event) {
  console.log(event.target);
  alert("you click on para: " + event.target.innerText);
}

// using parent element
let myContainer = document.querySelector("#container");
myContainer.addEventListener("click", altMsg);
