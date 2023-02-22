const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatoes', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('ul');
const array = [];

for (let i = 0; i < ingredients.length; i++) {
  array[i] = document.createElement('li');
  array[i].classList.add('item');
  array[i].textContent = ingredients[i];
  ingredientsList.append(array[i]);
}
