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
        "brownie": " Exquisitamente denso y chocolatoso, este brownie es un placer indulgente para los amantes del cacao. ¡Pura decadencia en cada bocado!",
        "cajeta-baitz": "Brownie elevado con el toque dulce de la cajeta, creando una mezcla celestial de caramelos y chocolate. ¡Una experiencia única de sabores!",
        "canela-baitz": "El aroma cálido de la canela envuelve este brownie, ofreciendo una fusión deliciosa de especias y chocolate. ¡Un toque reconfortante en cada porción!",
        "volcan": "Irresistible indulgencia con un corazón fundido de chocolate líquido. Este postre es una erupción de placer para los amantes del chocolate. ¡Una experiencia celestial!"
    }

    var priceMap = {
        "brownie": "69.99",
        "cajeta-baitz": "50.00",
        "canela-baitz": "50.00",
        "volcan": "79.099"
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
        $("#postrePrice").html(subtotal.toFixed(2));
    });
});