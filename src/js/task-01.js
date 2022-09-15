const list = document.querySelector("#categories");
const numberCategory = list.querySelectorAll("li.item");
console.log(`Number of categories: ${numberCategory.length}`);

const arrayCategory = numberCategory.forEach((item) => {
    console.log("");
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Category: ${item.querySelectorAll("li").length}`);
});
