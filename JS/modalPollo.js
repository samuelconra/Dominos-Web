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

    var imageMap = {
        "alitas-bbq": "alitas-bbq.jpg",
        "mango-habanero": "mango-habanero.jpg",
        "boneless-bbq": "boneless-bbq.jpg",
        "boneless-naturales": "boneless-naturales.jpg"
    }

    var descMap = {
        "alitas-bbq": "DESC",
        "mango-habanero": "DESC",
        "boneless-bbq": "DESC",
        "boneless-naturales": "DESC"
    }

    var priceMap = {
        "alitas-bbq": "79",
        "mango-habanero": "79",
        "boneless-bbq": "99",
        "boneless-naturales": "89"
    }

    modalImagen.src = 'Images/' + recipient + '.jpg' || 'imagen_defecto.jpg';
    modalImagen.alt = recipient;
    modalNombre.textContent = nameMap[recipient];
    modalDescr.textContent = descMap[recipient];
    modalPrecio.textContent = priceMap[recipient];
    modalCantidad.value = 1;
    modalTam.value = 0;

    // initialize product
    originalPrice = $("#pizzaPrice").text();
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
        if (currentValue == 1) 
        {
            newPrice = parseInt(newPrice) + 79;
        }
        else if (currentValue == 2)
        {
            newPrice = parseInt(newPrice) + 237;
        }
        
        var cantidad = $("#cantidadPollo").val();
        var subtotal = cantidad * newPrice;
        $("#polloPrice").html(subtotal);
    });
});