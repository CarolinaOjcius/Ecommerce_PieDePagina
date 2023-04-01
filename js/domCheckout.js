const comprar = new Comprar(carrito, "index.html");


//Funciones
function cargarTabla() {
    let tablaCarrito = document.getElementById("tablaCarrito")
    let datosHTML = ""
    //creo un arreglo unicamente con los ids
    let idRepetidos = carrito.map(novela => novela.id)
    /*el filter devuelve un arreglo con los elementos que cumplan con la condicion,
     indexOf me devuelve la primera posicion del elemento buscado*/
    let idUnicos = idRepetidos.filter((id, index) => idRepetidos.indexOf(id) === index)
    //recorro el arreglo de idUnicos, guardo el nombre y precio en novela ademas le agrego la cantidad como una propiedad
    idUnicos.forEach(identificador => {
        const novela = carrito.find(novela => novela.id === identificador);
        novela.cantidad = idRepetidos.filter(id => id === identificador).length;

        datosHTML += retornoTabla(novela);
    });
    tablaCarrito.innerHTML = datosHTML;
    asignarClicksEliminar();
}


function devolverTotal() {
    let importeTotal = document.getElementById("ImporteTotal");
    importeTotal.innerHTML += comprar.totalDelCarrito();
}


function asignarClicks() {
    //crea la constante buttons y le carga la lista de todos los botones con las clases mencionadas.
    const button = document.getElementById("confirmarCompra")
    //recorre el array de botones y a todos les asigna el eventListener click
    button.addEventListener("click", () => {
        comprar.confirmarCompra();
    })
}

function asignarClicksEliminar() {
    //busco los botones con la clase eliminar
    const buttons = document.querySelectorAll(".eliminar")
    //les agrego el evento click
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            //identifico que botón se presionó por el id
            let resultado = carrito.findLast(novela => novela.id === parseInt(btn.id))
            const posicion = carrito.lastIndexOf(resultado);
            if (resultado !== undefined) {
                Swal.fire({
                    title: '¿Está seguro que quiere eliminar una unidad de esta novela?',
                    showCancelButton: true,
                    confirmButtonText: 'confirmar',
                    cancelButtonText: 'cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Eliminado',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500,
                        }).then((result) => {
                            //elimino el elemento del carrito
                            carrito.splice(posicion, 1);
                            guardarCarrito(carrito)
                            //refresco el checkout.html
                            window.location.assign("checkout.html");
                        })
                    }
                })
            }

        })
    })
}

//llamas a las funciones

cargarTabla();
devolverTotal();
asignarClicks();

