export const addBurgerClickHandler = () => {
  document
    .querySelector(".burger__open")
    .addEventListener("click", openBurgerMenu);
  document
    .querySelector(".burger__close")
    .addEventListener("click", closeBurgerMenu);
  document
    .querySelector(".mobile-navigation-list")
    .addEventListener("click", (e) => {
      linkClickHandler(e);
    });
};
const burger = document.querySelector(".burger__container");

const openBurgerMenu = () => {
  window.addEventListener("resize", (e) => {
    if (e.currentTarget.innerWidth >= 778) {
      closeBurgerMenu();
      return;
    }
  });

  burger.classList.add("burger__container-active");
  document.body.style.overflow = "hidden";
};

const closeBurgerMenu = () => {
  burger.classList.remove("burger__container-active");
  document.body.style.overflow = "";
};

const linkClickHandler = (e) => {
  const logo = document.querySelector(".logo__home");

  if (e.currentTarget !== e.target) {
    burger.classList.remove("burger__container-active");
    document.body.style.overflow = "";
  }
};
