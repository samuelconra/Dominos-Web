var postreModal = document.getElementById('postreModal')
var originalPrice = 0;
var newPrice = 0;

postreModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever')

    var modalImagen = postreModal.querySelector('#modalPostre-image');
    var modalNombre = postreModal.querySelector('#nombrePostre')
    var modalDescr = postreModal.querySelector('#postre-descripcion')
    var modalPrecio = postreModal.querySelector('#postrePrice')
    var modalCantidad = postreModal.querySelector('#cantidadPostre')

    var nameMap = {
        "brownie": "Brownie",
        "cajeta-baitz": "Cajeta-baitz",
        "canela-baitz": "Canela-baitz",
        "volcan": "Volcan"
    }

    var descMap = {
        "brownie": "DESC",
        "cajeta-baitz": "DESC",
        "canela-baitz": "DESC",
        "volcan": "DESC"
    }

    var priceMap = {
        "brownie": "69",
        "cajeta-baitz": "49",
        "canela-baitz": "49",
        "volcan": "79"
    }

    modalImagen.src = 'Images/Food/' + recipient + '.jpg' || 'imagen_defecto.jpg';
    modalImagen.alt = recipient;
    modalNombre.textContent = nameMap[recipient];
    modalDescr.textContent = descMap[recipient];
    modalPrecio.textContent = priceMap[recipient];
    modalCantidad.value = 1;
    // initialize product
    originalPrice = $("#postrePrice").text();
    newPrice = originalPrice;
})


$(document).ready(function () {
    $("#cantidadPostre").change(function () {        
        var cantidad = $("#cantidadPostre").val();
        var subtotal = cantidad * newPrice;
        $("#postrePrice").html(subtotal);
    });
});