import { abrirCarrito } from "./abrir_carrito.js";
import { abrirMenu, cerrarMenu } from "./abrir_hamburguesa.js";
import { scrollTopBtn } from "./btn_scroll.js";
import { cerrarCarrito } from "./cerrar_carrito.js";
import "./agregar_producto_carrito.js";
import { cargarCarritoDesdeLocalStorage } from "./agregar_producto_carrito.js";

abrirMenu();
cerrarMenu();
scrollTopBtn();
abrirCarrito();
cerrarCarrito();
cargarCarritoDesdeLocalStorage();
