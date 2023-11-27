var polloModal = document.getElementById('bebidasModal')
var originalPrice = 0;
var newPrice = 0;

bebidasModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever')

    var modalImagen = bebidasModal.querySelector('#modalBebida-image');
    var modalNombre = bebidasModal.querySelector('#nombreBebida')
    var modalDescr = bebidasModal.querySelector('#bebida-descripcion')
    var modalPrecio = bebidasModal.querySelector('#bebidaPrice')
    var modalCantidad = bebidasModal.querySelector('#cantidadBebida')
    var modalTam = bebidasModal.querySelector('#tamBebida')

    var nameMap = {
        "coca-cola": "Coca-Cola",
        "pepsi": "Pepsi",
        "fanta": "Fanta",
        "sprite": "Sprite",
        "agua": "Agua"
    }

    var descMap = {
        "coca-cola": "DESC",
        "pepsi": "desc",
        "fanta": "desc",
        "sprite": "desc",
        "agua": "desc"
    }

    var priceMap = {
        "coca-cola": "18.00",
        "pepsi": "18.00",
        "fanta": "16.00",
        "sprite": "16.00",
        "agua": "10.00"
    }

    modalImagen.src = 'Images/Food/' + recipient + '.jpg' || 'imagen_defecto.jpg';
    modalImagen.alt = recipient;
    modalNombre.textContent = nameMap[recipient];
    modalDescr.textContent = descMap[recipient];
    modalPrecio.textContent = priceMap[recipient];
    modalCantidad.value = 1;
    modalTam.value = '600 ml';

    // initialize product
    originalPrice = $("#bebidaPrice").text();
    newPrice = originalPrice;
})


$(document).ready(function () {
    $("#cantidadBebida").change(function () {        
        var cantidad = $("#cantidadBebida").val();
        var subtotal = cantidad * newPrice;
        $("#bebidaPrice").html(subtotal);
    });

    $("#tamBebida").change(function () {
        var currentValue = $("#tamBebida").val();
        newPrice = originalPrice;       
        if (currentValue == '1 litro') 
        {
            newPrice = parseInt(newPrice) + 20;
        }
        else if (currentValue == '2 lts')
        {
            newPrice = parseInt(newPrice) + 40;
        }
        
        var cantidad = $("#cantidadBebida").val();
        var subtotal = cantidad * newPrice;
        $("#bebidaPrice").html(subtotal);
    });
});