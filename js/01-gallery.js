import { galleryItems } from "./gallery-items.js";

// console.log(basicLightbox);
// Change code below this line
const listEl = document.querySelector(".gallery");
// console.log(ulEl);
// console.log(galleryItems);

function createMarcupItems(arr) {
  return arr
    .map(function ({ description, original, preview }) {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

listEl.insertAdjacentHTML("beforeend", createMarcupItems(galleryItems));

listEl.addEventListener("click", handlerPhotoClick);

function handlerPhotoClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  // console.log(typeof evt.target);
  openCloseModal(createBigPhotoMarkup(evt.target));
}

function createBigPhotoMarkup(obj = {}) {
  return `<div><img src="${obj.dataset.source}" alt="${obj.alt}" class="gallery__image"></div>`;
}

function openCloseModal(str) {
  const instance = basicLightbox.create(str);
  instance.show();
  if (basicLightbox.visible()) {
    document.addEventListener("keydown", hendlerEsc);

    function hendlerEsc(evt) {
      if (evt.code === "Escape") {
        instance.close();
        document.removeEventListener("keydown", hendlerEsc);
      }
    }
  }
}
// const marLi = galleryItems
//   .map(function ({ description, preview }) {
//     return `<li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="large-image.jpg"
//       alt="${description}"
//     />
//   </a>
// </li>` })
//   .join("");
