import gallery from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const cardsMarkup = createGalleryMarkUp(gallery);
const buttonCls = document.querySelector('[data-action="close-lightbox"]');

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onImageClickOpenModal);
buttonCls.addEventListener('click', onCloseSvgClickCloseModal);

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
function onImageClickOpenModal(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('gallery__image')) {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.add('is-open');
    lightbox.querySelector('.lightbox__image').src = evt.target.dataset.source;
    lightbox.querySelector('.lightbox__image').alt = evt.target.alt;
    
  }
}
 /*Функция закрытия модального окна по кнопке "Закрыть"*/  
function onCloseSvgClickCloseModal(evt) {

  if (evt.target.classList.contains('lightbox__button')) {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('is-open');
  
    }
  }


 

