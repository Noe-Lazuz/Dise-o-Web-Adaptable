// Arreglo de objetos literales: cada producto agrupa nombre, precio, stock y su método
const catalogo = [
  { nombre: "Mouse", precio: 12.5, stock: 10, mostrarInfo() { console.log(`${this.nombre} - $${this.precio}`); } },
  { nombre: "Teclado", precio: 25, stock: 0, mostrarInfo() { console.log(`${this.nombre} - $${this.precio}`); } },
  { nombre: "Monitor", precio: 199.99, stock: 5, mostrarInfo() { console.log(`${this.nombre} - $${this.precio}`); } },
  { nombre: "Auriculares", precio: 45.75, stock: 0, mostrarInfo() { console.log(`${this.nombre} - $${this.precio}`); } }
];

// Recorro con for...of y llamo al método de cada objeto
for (const producto of catalogo) {
  producto.mostrarInfo();
}

// Selecciono el contenedor una sola vez
const contenedor = document.getElementById("contenedor");

// Acumulo TODO el HTML en una variable (una sola asignación de innerHTML)
let html = "";

for (const producto of catalogo) {
  // Condional de stock: clase CSS roja si está agotado
  const estado = producto.stock === 0
    ? '<span class="agotado">Agotado</span>'
    : `Stock: ${producto.stock}`;
  // Concateno la tarjeta al string html (sin tocar el DOM todavía)
  html += `<div class="producto">${producto.nombre} - $${producto.precio} | ${estado}</div>`;
}

// Inyección única: UNA SOLA vez, al final del bucle
contenedor.innerHTML = html;

// RETO EXTRA: arreglo con los nombres de los productos agotados usando .map + filter
const agotados = catalogo
  .filter((p) => p.stock === 0)
  .map((p) => p.nombre);
console.log("Productos agotados:", agotados);
