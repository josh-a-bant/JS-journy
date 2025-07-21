console.log("hi");

let initialize = document.querySelector(".initialize");
let reading = document.querySelector(".reading");
let password = document.querySelector(".password");
let sendingFiles = document.querySelector(".sendingFiles");
let cleaningUp = document.querySelector(".cleaningUp");

function addDots(element) {
  let spanElement = document.createElement("span");
  spanElement.innerHTML = "...";
  setTimeout(() => {
    element.insertAdjacentElement("beforeend", spanElement);
  }, 500);
}

setTimeout(() => {
  initialize.textContent = "Initializing Hacking";
  addDots(initialize);
}, 1200);

setTimeout(() => {
  reading.textContent = "Reading you files";
  addDots(reading);
}, 2400);

setTimeout(() => {
  password.textContent = "Password file detected";
  addDots(password);
}, 3600);

setTimeout(() => {
  sendingFiles.textContent =
    "Sending all password and personal files to server";
  addDots(sendingFiles);
}, 4800);

setTimeout(() => {
  cleaningUp.textContent = "Cleaning Up";
  addDots(cleaningUp);
}, 6000);
