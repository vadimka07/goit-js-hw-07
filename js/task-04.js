const data = document.getElementById('value');
const buttonIncrement = document.querySelector('[data-action=increment]')
const buttonDecrement = document.querySelector('[data-action=decrement]')
const increment = () => {
    let counterValue = parseInt(data.textContent);
    counterValue ++;
    data.textContent = counterValue.toString();
}
const decrement = () => {
    let counterValue = parseInt(data.textContent);
    counterValue --;
    data.textContent = counterValue.toString();
}
buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);


