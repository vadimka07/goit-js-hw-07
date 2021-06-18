const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

// ВАРИАНТ ОДИН
const ingredientsList = document.querySelector('#ingredients');
const ingredientsList2 = document.createElement('ul');
ingredientsList2.id = 'ingredients2';
const fragmentDoc = new DocumentFragment();
const listItems = ingredients.map((item) => {
    const listItem          = document.createElement('li');
    listItem.textContent    = item;
    return listItem;
});
ingredientsList.append(...listItems);

// ВАРИАНТ ДВА
document.body.insertBefore(ingredientsList2, document.querySelector('script[type=module]'));
ingredients.map((item) => {
    const listItem          = document.createElement('li');
    listItem.textContent    = item;
    fragmentDoc.appendChild(listItem);
});
ingredientsList2.append(fragmentDoc);