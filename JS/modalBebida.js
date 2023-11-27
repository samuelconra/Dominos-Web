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
        "coca-cola": "La icónica efervescencia y sabor a cola de Coca-Cola, refrescante y perfecta para cualquier ocasión. ¡Sumérgete en el clásico e inconfundible placer burbujeante!",
        "pepsi": "Una explosión equilibrada de dulzura y frescura en cada sorbo. El distintivo sabor de Pepsi te invita a disfrutar de momentos refrescantes.",
        "fanta": "deSumérgete en la vibrante explosión de sabores de Fanta. Desde naranja hasta piña, cada sorbo es una experiencia frutal y burbujeante. ¡Refresca tu día con Fanta!sc",
        "sprite": "La chispeante esencia cítrica de Sprite, ligera y burbujeante. Perfecta para momentos de frescura y saciedad. ¡Haz que cada sorbo cuente con el sabor único de Sprite!",
        "agua": "Pureza en cada gota, el agua esencia de la vida. Hidratación cristalina para revitalizar tu cuerpo. ¡La elección refrescante y natural para equilibrar tu día!"
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
        $("#bebidaPrice").html(subtotal.toFixed(2));
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
        $("#bebidaPrice").html(subtotal.toFixed(2));
    });
});