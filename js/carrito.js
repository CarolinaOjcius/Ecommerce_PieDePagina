const carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function guardarCarrito(carrito) {
  let prodJSON = JSON.stringify(carrito);
  localStorage.setItem('carrito', prodJSON);
}

function recuperarCarrito() {
  const productosLS = localStorage.getItem('carrito');
  return JSON.parse(productosLS);
}

function vaciarCarrito(){
  carrito.forEach(element => {
    carrito.pop();
  });

}


