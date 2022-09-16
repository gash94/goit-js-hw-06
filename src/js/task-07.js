const input = document.getElementById("font-size-control")
const text = document.getElementById("text");

input.addEventListener("input", () => {
const value = input.value;
text.style.fontSize = `${value}px`;
});