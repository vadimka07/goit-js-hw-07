const valueNameInput = document.getElementById('name-input');
const valueNameOutput = document.getElementById('name-output');
valueNameInput.addEventListener('input', ()=> {
    if(valueNameInput.value === '') {
        valueNameOutput.innerHTML = 'незнакомец!';
    } else {
        valueNameOutput.innerHTML = valueNameInput.value;
    }
})