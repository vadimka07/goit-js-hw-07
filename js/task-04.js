const data = document.getElementById('value');
const buttonIncrement = document.querySelector('[data-action=increment]')
const buttonDecrement = document.querySelector('[data-action=decrement]')
let value = 0;
const increment = () => {
    value ++;
    data.textContent = value.toString();
}
const decrement = () => {
    value --;
    data.textContent = value.toString();
}
buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);


