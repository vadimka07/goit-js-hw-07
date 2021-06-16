const getCategories = document.querySelector('#categories');
console.log(getCategories.children.length);

const getCategory = document.querySelectorAll('.item');
getCategory.forEach((item)=> {
    const title         = item.querySelector('h2').textContent;
    const subcategories = item.querySelectorAll('ul li').length;
    console.log('Текст заголовка', title);
    console.log('Количество элементов подкатегории', subcategories);
});

