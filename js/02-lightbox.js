import { galleryItems } from "./gallery-items.js";

const listEl = document.querySelector(".gallery");

function createMarcupFoto(arr) {
  return arr
    .map(function ({ preview, original, description }) {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}

listEl.insertAdjacentHTML("beforeend", createMarcupFoto(galleryItems));
new SimpleLightbox(".gallery a", { captionsData: `alt`, captionDelay: 250 });

let link = document.querySelector(".gallery__link");
