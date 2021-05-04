import gallery from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const cardsMarkup = createGalleryMarkUp(gallery);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onImageClick)

/*Функция добавления разметки*/
function createGalleryMarkUp(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link"
          href = "${original}">
      <img class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"/>
      </a>
    </li>
      `;
    })
    .join('');
}

/*Функция открытия модального окна с оригинальным изображением*/ 
function onImageClick(evt) {
evt.preventDefault();
  if (evt.target.classList.contains('gallery__image')) {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.add('is-open');
    lightbox.querySelector('.lightbox__image').src = evt.target.dataset.source;
    lightbox.querySelector('.lightbox__image').alt = evt.target.alt;
    
  }

 /* const currentOpenImg = document.querySelector('.gallery__image.is-open');
  if (currentOpenImg) {
    currentOpenImg.classList.remove('is-open');
  }*/
 /* const lightbox = evt.target;
  lightbox.classList.add('is-open');
  lightbox.src = evt.target.dataset.source;
  console.log(lightbox);*/

 
}
