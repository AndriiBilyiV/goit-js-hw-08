// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

document.querySelector('.gallery').style.listStyle = 'none';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


let galleryArray = '';
galleryItems.forEach(elm => {
    const galleryItem = 
    `<li class="gallery__item">
        <a class="gallery__link" href="${elm.original}">
            <img class="gallery__image" src="${elm.preview}" alt="${elm.description}" />
        </a>
    </li>`;
    galleryArray += galleryItem;
})

const gallery = document.querySelector('.gallery')
gallery.insertAdjacentHTML('afterbegin',galleryArray);


const modal = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250
});

console.log(galleryItems);
