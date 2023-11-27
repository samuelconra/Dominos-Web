var polloModal = document.getElementById('polloModal')
var originalPrice = 0;
var newPrice = 0;
polloModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever')

    var modalImagen = polloModal.querySelector('#modalPollo-image');
    var modalNombre = polloModal.querySelector('#nombrePollo')
    var modalDescr = polloModal.querySelector('#pollo-descripcion')
    var modalPrecio = polloModal.querySelector('#polloPrice')
    var modalCantidad = polloModal.querySelector('#cantidadPollo')
    var modalTam = polloModal.querySelector('#tamPollo')

    var nameMap = {
        "alitas-bbq": "Alitas BQQ",
        "mango-habanero": "Alitas Mango Habanero",
        "boneless-bbq": "Boneless BBQ",
        "boneless-naturales": "Boneless Naturales"
    }

    var descMap = {
        "alitas-bbq": "DESC",
        "mango-habanero": "DESC",
        "boneless-bbq": "DESC",
        "boneless-naturales": "DESC"
    }

    var priceMap = {
        "alitas-bbq": "70.00",
        "mango-habanero": "70.00",
        "boneless-bbq": "99.99",
        "boneless-naturales": "89.99"
    }

    modalImagen.src = 'Images/Food/' + recipient + '.jpg' || 'imagen_defecto.jpg';
    modalImagen.alt = recipient;
    modalNombre.textContent = nameMap[recipient];
    modalDescr.textContent = descMap[recipient];
    modalPrecio.textContent = priceMap[recipient];
    modalCantidad.value = 1;
    modalTam.value = '6 piezas';

    // initialize product
    originalPrice = $("#polloPrice").text();
    newPrice = originalPrice;
})


$(document).ready(function () {
    $("#cantidadPollo").change(function () {        
        var cantidad = $("#cantidadPollo").val();
        var subtotal = cantidad * newPrice;
        $("#polloPrice").html(subtotal);
    });

    $("#tamPollo").change(function () {
        var currentValue = $("#tamPollo").val();
        newPrice = originalPrice;       
        if (currentValue == '12 piezas') 
        {
            newPrice = parseInt(newPrice) + 79;
        }
        else if (currentValue == '24 piezas')
        {
            newPrice = parseInt(newPrice) + 237;
        }
        
        var cantidad = $("#cantidadPollo").val();
        var subtotal = cantidad * newPrice;
        $("#polloPrice").html(subtotal);
    });
});