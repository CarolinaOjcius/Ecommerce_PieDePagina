class Comprar {
    carrito
    documento
    constructor(carrito, documento) {
        this.carrito = carrito;
        this.documento = documento;
    }


    totalDelCarrito() {
        let total = carrito.reduce((acc, novela) => acc + novela.precio, 0);
        return total;
    }
    confirmarCompra() {
        if (this.carrito.length <= 0) {
            //alert("No hay productos en el carrito para comprar");
            Swal.fire('No hay novelas en el carrito para comprar');
        } else {
            //alert("Gracias por su compra");
            Swal.fire('Gracias por su compra').then((result) => {
                localStorage.removeItem("carrito");
                this.carrito = [];
                vaciarCarrito();
                window.location.assign(this.documento);
            })
        }
    }
}