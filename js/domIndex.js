const inputSearch = document.getElementById("inputSearch");
const container = document.querySelector(".container");
const productos = [];


//funciones

async function cargarDatos() {
    let cardsHTML = ""
    try {
        const response = await fetch("js/productos.json");
        const data = await response.json();
        productos.push(...data);
        productos.forEach(element => {
            //a cardsHTML le suma lo que le devuelve retornoCard por cada producto
            cardsHTML += retornoCard(element)
        });

    } catch (error) {
        cardsHTML = retornoError();
    } finally {
        container.innerHTML = cardsHTML;
        asignarClicks();
    }
}



function asignarClicks() {
    //crea la constante buttons y le carga la lista de todos los botones con las clases mencionadas.
    const buttons = document.querySelectorAll(".button.button-outline.button-add")
    //recorre el array de botones y a todos les asigna el eventListener click
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            //resultado guarda si el id que tiene el botón existe como id en la lista de productos
            let resultado = productos.find(novela => novela.id === parseInt(btn.id))
            //si resultado existe
            if (resultado !== undefined) {
                //agrega el producto que encontró al carrito
                Swal.fire({
                    title: `Se agregó al carrito la novela:<br><i>${resultado.nombre}</i>`,
                    timer: 1500,
                }

                ).then((result) => {
                    carrito.push(resultado);
                    //guarda en localStorage el arreglo del carrito
                    guardarCarrito(carrito);
                });
            }
        })
    })
}

//llamadas a las funciones
cargarDatos();




