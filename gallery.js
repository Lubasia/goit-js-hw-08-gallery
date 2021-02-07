import values from './gallery-items';

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
    galleryImgEl.setAttribute('src', `${ value.preview }`);
    galleryImgEl.setAttribute('data-sorce', `${value.original}`);
    galleryImgEl.setAttribute('alt', `${value.description}`);
    galleryImgEl.setAttribute('data-index', `${value.index}`);

    galleryAEl.appendChild(galleryAEl);
    galleryAEl.appendChild(galleryImgEl);

    return galleryliEl
}

const galleryItem = values.map(value => createListGallery(value));
galleryUlEl.append(... galleryItem)
