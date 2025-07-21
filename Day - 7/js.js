console.log("js code run");
// background-color: rgb(0 to 255, 0 to 255, 0 to 255);
// color: rgb(0 to 255, 0 to 255, 0 to 255);

let boxes = document.getElementsByClassName("boxes");

let random = () => {
  return Math.round(Math.random() * (255 - 0) + 1);
};

Array.from(boxes).forEach((box) => {
  let color = `rgb(${random()}, ${random()}, ${random()})`;
  let backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;

  box.style.color = color;
  box.style.backgroundColor = backgroundColor;

  let colorCode = document.createElement("p");
  colorCode = backgroundColor;

  box.append(colorCode);

  console.log(box.style);
  box.hidden = false;
});
