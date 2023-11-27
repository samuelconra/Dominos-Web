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
        "mango-habanero": "Alitas Habanero",
        "boneless-bbq": "Boneless BBQ",
        "boneless-naturales": "Boneless Naturales"
    }

    var descMap = {
        "alitas-bbq": "Jugosas alitas bañadas en salsa BBQ ahumada, ofreciendo un equilibrio perfecto entre dulce y picante. ¡Una experiencia de sabor irresistible!",
        "mango-habanero": "Aventura tropical en cada mordida, con el dulzor del mango y el toque picante del habanero. ¡Alitas que despiertan tus sentidos!",
        "boneless-bbq": "Ternura sin hueso en cada bocado, sumergidos en la deliciosa salsa BBQ. ¡Perfecto equilibrio entre suavidad y sabor a la parrilla!",
        "boneless-naturales": "Deliciosamente versátiles, estos boneless naturales son lienzos en blanco para tu paladar. Acompaña con tus salsas favoritas y crea tu experiencia única. ¡Sin límites de sabor!"
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
        $("#polloPrice").html(subtotal.toFixed(2));
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
        $("#polloPrice").html(subtotal.toFixed(2));
    });
});