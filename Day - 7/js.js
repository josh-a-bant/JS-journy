console.log("js code run");

let boxes = document.getElementsByClassName("boxes");
let colors = ["purple", "Cyan", "brown"];
let backgroundColor = ["red", "green", "blue", "Fuchsia", "Indigo", "Magenta"];
console.log(boxes);

Array.from(boxes).forEach((box) => {
  box.style.color = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor =
    backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
  box.hidden = false;
});
