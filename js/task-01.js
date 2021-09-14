const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категрии`);

const itemEl = categoriesEl.querySelectorAll('.item');
itemEl.forEach((item) => console.log(item.firstElementChild.textContent));
