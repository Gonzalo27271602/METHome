# 🛒 E-commerce en React

Este proyecto es un **e-commerce** desarrollado como entrega final del curso de **React JS**, que simula una tienda online con gestión de productos, carrito de compras y finalización de compra con registro de órdenes en Firebase.

## 📌 Características principales
- 📦 **Listado dinámico de productos** obtenido desde una base de datos.
- 🛍 **Carrito de compras** con almacenamiento persistente usando `Context API` y `localStorage`.
- ➕➖ **Control de cantidad de productos** con validación de stock.
- 🧾 **Página de checkout** con formulario controlado y envío de orden a **Firebase Firestore**.
- 🔑 **Generación automática de ID de compra** al confirmar la orden.
- 🎨 **Diseño responsive** con Bootstrap y SASS.

## 🛠 Tecnologías utilizadas
- **React JS** – Biblioteca principal para la construcción de la interfaz.
- **React Router DOM** – Manejo de rutas y navegación SPA.
- **Context API** – Gestión de estado global para el carrito.
- **Firebase Firestore** – Base de datos para almacenar órdenes.
- **Bootstrap** – Estilos y layout responsivo.
- **SASS** – Preprocesador CSS para estilos personalizados.
- **JavaScript (ES6+)** – Lógica de la aplicación.
- **HTML5 / CSS3** – Estructura y diseño base.

## 🚀 Funcionalidades
1. **Visualización de productos**
   - Lista de productos renderizada dinámicamente.
   - Botones para agregar al carrito desde cada card.
2. **Carrito de compras**
   - Vista dedicada del carrito.
   - Posibilidad de aumentar/disminuir cantidad de productos.
   - Cálculo automático del total.
3. **Checkout**
   - Formulario controlado con `<label>` y validación básica.
   - Envío de orden a Firebase con datos de comprador y productos.
   - Limpieza del carrito después de la compra.
4. **Persistencia**
   - Carrito guardado en `localStorage` para que no se pierdan datos al recargar.
5. **Navegación**
   - Rutas separadas para Home, Productos, Detalle, Carrito y Checkout.

## 📷 Capturas de pantalla
*(Puedes agregar imágenes aquí de la vista de productos, carrito y checkout)*

## ⚙ Instalación y ejecución
1. Clonar este repositorio:
   ```bash
   git clone https://github.com/usuario/nombre-del-repo.git

   Subir a netlify
