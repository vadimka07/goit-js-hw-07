import {galleryItems} from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryItemsResult = galleryItems.map((item) => {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" width="380">
                </a>
            </li>`
}).join('');
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsResult);

galleryContainer.addEventListener('click', openPopup)


function openPopup(e) {
    e.preventDefault();
    if (e.target.classList.contains('gallery')) {
        return;
    }
    const instance = basicLightbox.create(`
        <div class="modal">
           <img src="${e.target.dataset.source}" alt="${e.target.alt}">
        </div>
    `)
    instance.show();
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            console.log('close');
            instance.close();
        }
    })
}
