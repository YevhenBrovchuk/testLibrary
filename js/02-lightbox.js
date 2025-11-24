import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

console.log(listEl);
// createMarcupFoto(galleryItems);
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

listEl.addEventListener("click", handlerPhotoClick);

function handlerPhotoClick() {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
}

function createBigPhotoMarkup(obj = {}) {
  return `<div class="gallery">
  <a href="images/image1.jpg">
    <img src="images/thumbs/thumb1.jpg" alt="" title="" />
  </a>
  <a href="images/image2.jpg">
    <img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image" />
  </a>
</div>;`;
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

// let m = galleryItems
//   .map(({ preview, original, description }) => {
//     `<li class="gallery__item">
//       <a class="gallery__link" href="${original}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           alt="${description}"
//         />
//       </a>
//     </li>`;
//   })
//   .join(" ");

// console.log(m);
