const inputEl = document.querySelector('input');

const inputValueHandler = (evt) => {
    if (evt.currentTarget.value.length == inputEl.dataset.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};

inputEl.addEventListener('change', inputValueHandler);
