const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категрии`);

const itemEl = categoriesEl.querySelectorAll('.item');
itemEl.forEach((item) => {
    console.log(`- Категория: ${item.firstElementChild.textContent}`);
    console.log(
        `- Количество элементов: ${item.firstElementChild.nextElementSibling.children.length}`
    );
});
