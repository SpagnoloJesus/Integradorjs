import { renderCarrito } from "./agregar_producto_carrito.js";

const $carrito = document.querySelector(".carrito");
const $btnAbrirCarrito = document.querySelector(".nav__btn-cart");

export const abrirCarrito = () => {
  $btnAbrirCarrito.addEventListener("click", (e) => {
    $carrito.classList.add("carrito--active");
    renderCarrito();
  });
};
