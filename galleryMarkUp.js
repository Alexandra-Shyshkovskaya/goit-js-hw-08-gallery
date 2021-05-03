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

function onImageClick(evt) {
evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return
  }
  console.log(evt.target);
}

 


