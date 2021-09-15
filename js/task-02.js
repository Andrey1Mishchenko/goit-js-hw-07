const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ulEl = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
    const ulItem = document.createElement('li');
    ulItem.textContent = ingredient;
    ulEl.appendChild(ulItem);
});
