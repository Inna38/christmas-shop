import { data } from "../../data";

export const renderModal = (content) => {
  const markup = content
    .map(({ title, img, description, describe, tags }) => {
      return `
            <div class="overlay">
              <div class="modal">
                <div class="">
                  <img src="${img}" alt="modal_img" class="modal__img" />
                  <div class="modal__content">
                    <h3 class="modal__title">${title}</h3>
                    <p class="modal__description">${description}</p>
                 <p class="modal__describe">${describe}</p>
                  </div>
                </div>
              </div>
            </div>
    `;
    })
    .join("");

  openModal(markup);
};

const buildModal = (contentId) => {
  const result = data.filter(({ id }) => id === contentId);
 
  renderModal(result);
};

export const addModalClickHandler = () => {
  let bestGifts = document.querySelectorAll(".js-modal .best__card");

  bestGifts.forEach(function (bestGift) {
    bestGift.addEventListener("click", function (e) {
      buildModal(e.currentTarget.id);
    });
  });

  document.body.addEventListener("click", closeModal);
};

const openModal = (markup) => {
  document.body.insertAdjacentHTML("beforeend", markup);
  document.body.style.overflow = "hidden";
};

const closeModal = (e) => {
  let overlay = document.querySelector(".overlay");
  let classes = e?.target?.classList;

  if (classes.contains("overlay") || classes?.contains("modal__close-icon")) {
    overlay.classList.remove("overlay");
    overlay.innerHTML = "";
    document.body.style.overflow = "";
  }
};
