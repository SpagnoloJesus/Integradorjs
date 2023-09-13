import { productos } from "./datos/productos.js";
const $producto = document.getElementById("servicios");
const $carritoVentana = document.getElementById("carrito");
const $notificacion = document.querySelector(".notificacion__container");
let carrito = [];

const $cards = document.querySelectorAll(".price__card-cont");

let total = 0;
export const renderCarrito = () => {
  $carritoVentana.classList.add("carrito--active");

  total = 0;

  if (carrito.length > 0) {
    document
      .querySelector(".carrito__main-leyenda")
      .classList.add("carrito__main-leyenda--hidden");
  } else {
    document
      .querySelector(".carrito__main-leyenda")
      .classList.remove("carrito__main-leyenda--hidden");
  }

  const productosAnteriores =
    $carritoVentana.querySelectorAll(".carrito__producto");

  productosAnteriores.forEach((producto) => {
    producto.remove();
  });

  carrito.forEach((productoCarrito) => {
    const plantilla = `
        <section class="carrito__producto-info">

          <p class="carrito__nombre">$${productoCarrito.nombre}</p>
        </section>
        <section class="carrito__precio-delete">
          <button class="carrito-delete"><img src="../../assets/exit.svg"></button>
          <p class="carrito__price">${productoCarrito.precio}</p>
        </section>
        `;
    const itemCarrito = document.createElement("div");

    itemCarrito.classList.add("carrito__producto");

    itemCarrito.innerHTML = plantilla;

    total += parseFloat(productoCarrito.precio);

    $carritoVentana.querySelector(".carrito__main").appendChild(itemCarrito);
    document.querySelector(".carrito__footer-dinero");
  });
  const formattedTotal = total.toFixed(2); // Formatea el total con dos decimales
  document.querySelector(
    ".carrito__footer-dinero"
  ).innerText = `$${formattedTotal}`;
};

$cards.forEach(($card) => {
  const $btnAgregarCarrito = $card.querySelector(".btn__price");
  const $id = $card.getAttribute("data-id");
  const $nombreProducto = $card.querySelector(".plan__title").textContent;
  const $precio = $card.querySelector(".price__card-cont-precio").textContent;

  $btnAgregarCarrito.addEventListener("click", (e) => {
    carrito.push({
      id: $id,
      nombre: $nombreProducto,
      precio: $precio,
    });

    // Mostrar la notificación
    $notificacion.classList.add("notificacion__container--active");

    // Ocultar la notificación después de 5 segundos
    setTimeout(() => {
      $notificacion.classList.remove("notificacion__container--active");
    }, 3000);
  });
});

$carritoVentana.addEventListener("click", (e) => {
  if (e.target.closest(".carrito-delete")) {
    const producto = e.target.closest(".carrito__producto");
    const indexProducto = [
      ...$carritoVentana.querySelectorAll(".carrito__producto"),
    ].indexOf(producto);

    carrito = carrito.filter((item, index) => {
      if (index !== indexProducto) {
        return item;
      }
    });
    if (carrito.length > 0) {
      total -= parseFloat(carrito[indexProducto]?.precio || 0); // Restar el precio si existe el producto
    }
    renderCarrito();
  }
});
