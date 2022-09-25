const blockControls = document.getElementById("controls");
const input = blockControls.querySelector("input");
const btnCreate = blockControls.querySelector("[data-create]");
const btnDestroy = blockControls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

let boxesCollection = [];


function createBoxes(amount) {
  console.log(amount);
  let sizesOfBox = 30;
  for (var i = 0; i < amount; i += 1) {
    let createEl = document.createElement("div");
    createEl.style.width = `${sizesOfBox}px`;
    createEl.style.height = `${sizesOfBox}px`;
    sizesOfBox += 10;
    createEl.style.backgroundColor = getRandomHexColor();
    boxesCollection.push(createEl);
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function pushBoxesCollection() {
  
  createBoxes(Number(input.value));
  boxes.append(...boxesCollection);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  boxesCollection = [];
}

btnCreate.addEventListener("click", pushBoxesCollection);
btnDestroy.addEventListener("click", destroyBoxes);