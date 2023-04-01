function retornoCard(novela) {
  return `<div class="card " id="cardLibro">
                <div class="card-image">
                    <img src="${novela.imagen}">
                </div>
                <div class="card-name">${novela.nombre}</div>
                <div class="card-options">
                    <div class="card-price">$${novela.precio.toFixed(2)}</div>
                    <button class="card-button button button-outline button-add" id="${novela.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`
}

function retornoError() {
  return `<div class="card-error ocultar">
                <h2>Houston, tenemos un problema 🔌</h2>
                <h3>No pudimos cargar los productos. 🤦🏻‍♂️</h3>
                <h3>Intenta nuevamente en unos instantes...</h3>
            </div>`
}

function retornoTabla(novela) {
  return `<tr>
          <td>${novela.nombre}</td>
          <td>${novela.cantidad}</td>
          <td><button class="eliminar" id="${novela.id}">X</button></td>
          <td>${novela.precio.toFixed(2)}</td>
        </tr>`
}

function retornoTotal(comprar) {
  return `
        "$"${comprar.retornoTotal}
        `
}
