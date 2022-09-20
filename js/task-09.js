function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const randomBtn = bodyColor.querySelector(".change-color")
const color = bodyColor.querySelector(".color")

const changeColor = () => {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = `${randomColor}`;
  color.textContent = `${randomColor}`;
};

randomBtn.addEventListener("click", changeColor);