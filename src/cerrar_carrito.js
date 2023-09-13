const $carrito = document.querySelector(".carrito");
const $btnCerrarCarrito = document.querySelector(".carrito__btn-cerrar");

export const cerrarCarrito = () => {
  $btnCerrarCarrito.addEventListener("click", (e) => {
    $carrito.classList.remove("carrito--active");
  });
};
