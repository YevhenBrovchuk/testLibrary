import { galleryItems } from "./gallery-items.js";

// Change code below this line
const ulEl = document.querySelector(".gallery");
console.log(ulEl);
console.log(galleryItems);

const marLi = galleryItems
  .map(function ({ description, preview }) {
    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</li>`;
    // if (description.includes("H")) {
    //   return `<li><img src="${preview}" alt="${description}"></li>`;
    // } else {
    //   return `<li>${description}</li>`;
    // }
  })
  .join("");
console.dir(marLi);
ulEl.insertAdjacentHTML("beforeend", marLi);
