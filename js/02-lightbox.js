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

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    overlay: true,
    spinner: true,
    animationSpeed: 500
});
