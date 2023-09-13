const $btnAbrirMenu = document.querySelector(".nav__btn-menu");
const $navMenu = document.querySelector(".nav__menu");
const $btnCerrarMenu = document.querySelector(".nav__btn-close");

export const abrirMenu = () => {
  $btnAbrirMenu.addEventListener("click", (e) => {
    $navMenu.classList.add("nav__menu--active");
  });
};

export const cerrarMenu = () => {
  $navMenu.addEventListener("click", (e) => {
    $navMenu.classList.remove("nav__menu--active");
  });
};
