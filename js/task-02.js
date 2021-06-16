const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ingredientsContainer = document.querySelector('#ingredients');
ingredients.forEach((item) => {
    const listItem          = document.createElement('li');
    listItem.textContent    = item;
    ingredientsContainer.append(listItem);
    console.log(listItem);
});