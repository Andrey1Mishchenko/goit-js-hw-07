const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ulEl = document.querySelector('#ingredients');

const createUlItems = ingredients.map((ingredient) => {
    const ulItem = document.createElement('li');
    ulItem.textContent = ingredient;
    return ulItem;
});

ulEl.append(...createUlItems);
