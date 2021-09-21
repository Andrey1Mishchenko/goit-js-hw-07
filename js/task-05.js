const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');
const nameOutputValueHandler = (evt) => {
    // if (!evt.currentTarget.value) {
    //     nameOutputEl.textContent = 'незнакомец';
    // } else {
    //     nameOutputEl.textContent = evt.currentTarget.value;
    // }
    evt.currentTarget.value
        ? (nameOutputEl.textContent = evt.currentTarget.value)
        : (nameOutputEl.textContent = 'незнакомец');
};
nameInputEl.addEventListener('input', nameOutputValueHandler);
