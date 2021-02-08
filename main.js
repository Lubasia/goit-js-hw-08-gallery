import values from "./gallery-items.js";

// создание галереи в HTML

const galleryUlEl = document.querySelector('.js-gallery')

const createListGallery = value => {
    const galleryliEl = document.createElement('li');
    galleryliEl.classList.add('gallery__item');

    const galleryAEl = document.createElement('a');
    galleryAEl.classList.add('gallery__link');
    galleryAEl.setAttribute('href', `${ value.original }`);

    const galleryImgEl = document.createElement('img');
    galleryImgEl.classList.add('gallery__image');
    galleryImgEl.setAttribute('src', `${value.preview}`),
        galleryImgEl.setAttribute('data-source', `${value.original}`),
        galleryImgEl.setAttribute('alt', `${value.description}`),
        galleryImgEl.setAttribute('data-index', `${value.index}`);

    galleryliEl.appendChild(galleryAEl);
    galleryAEl.appendChild(galleryImgEl);

    return galleryliEl
}

const galleryItem = values.map(value => createListGallery(value));
galleryUlEl.append(...galleryItem)

// Модальное окно

const lightBoxEl = document.querySelector('.js-lightbox');
const lightBoxOverlayEl = document.querySelector('.lightbox__overlay')
const lightBoxImg = document.querySelector('.lightbox__image');

galleryUlEl.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();
    const btn = e.target;
    if (btn.nodeName !== 'IMG') {
        return
    }
    lightBoxEl.classList.add('is-open');

    lightBoxImg.src = btn.dataset.source;
    lightBoxImg.dataset.index = btn.dataset.index
}

//закрытие
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]')

closeModalBtn.addEventListener('click', () => {
    lightBoxEl.classList.remove('is-open');
    lightboxImg.src = '';
});

lightBoxOverlayEl.addEventListener('click', e => {

    if(e.target === e.currentTarget) {

        lightBoxEl.classList.remove('is-open');
    lightboxImg.src = '';

    }

});