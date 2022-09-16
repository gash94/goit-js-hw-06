const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIng = document.querySelector('#ingredients')
const createItem = ingredients.map(itemArr => {
  const listItem = document.createElement("li");
  listItem.classList.add('item');
  listItem.textContent = itemArr;
  
  return listItem
});
listIng.append(...createItem)