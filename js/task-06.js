const inputValue = document.getElementById('validation-input');
inputValue.addEventListener('focus', ()=>  inputValue.classList.remove('invalid', 'valid'));
inputValue.addEventListener('blur', ()=> {
    if(inputValue.value.length === Number(inputValue.dataset.length)) {
        inputValue.classList.toggle('valid');
    } else {
        inputValue.classList.toggle('invalid');
    }
})
