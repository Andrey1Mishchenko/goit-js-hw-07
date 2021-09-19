let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

const decrementHandler = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
const incrementHandler = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementHandler);
incrementBtn.addEventListener('click', incrementHandler);
