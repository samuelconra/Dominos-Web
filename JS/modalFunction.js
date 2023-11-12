var pizzaModal = document.getElementById('pizzaModal')
var originalPrice = 0;
var newPrice = 0;
pizzaModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever')
  
    // Update the modal's content.
    //   var modalTitle = pizzaModal.querySelector('.modal-title')
    //   var modalBodyInput = pizzaModal.querySelector('.modal-body input')
    var modalImage = pizzaModal.querySelector('.modal-image');
    var modalPizzaType = pizzaModal.querySelector('.pizza-tipo')
    var modalPizzaDesc = pizzaModal.querySelector('.pizza-descripcion')
    var modalPizzaPrice = pizzaModal.querySelector('#productPrice')
    var modalPizzaCantidad = pizzaModal.querySelector('#cantidadPizza')
    var modalPizzaTam = pizzaModal.querySelector('#tamPizza')

    var imageMap = {
        "pepperoni": "pizza-pepperoni.jpeg",
        "hawaiana": "pizza-hawaiana.jpg",
        "mexicana": "pizza-mexicana.jpg",
        "cheesy": "pizza-cheesy.jpg",
        "deluxe": "pizza-deluxe.jpg"
    };

    var descMap = {
        "pepperoni": "La original y clásica masa fresca hecha al momento con orilla dorada y espolvoreada de especias que le dan nuestro toque único.",
        "hawaiana": "La original y clásica masa fresca hecha al momento con orilla dorada y espolvoreada de especias que le dan nuestro toque único.",
        "mexicana": "Descripcion Pizza Mexicana",
        "cheesy": "DESC",
        "deluxe": "DESC"
    }

    var priceMap = {
        "pepperoni": "120",
        "hawaiana": "129",
        "mexicana": "159",
        "cheesy": "139",
        "deluxe": "559"
    }

    //   modalTitle.textContent = 'New message to ' + recipient
    //   modalBodyInput.value = recipient

    modalImage.src = 'Images/' + imageMap[recipient] || 'imagen_defecto.jpg';
    modalImage.alt = recipient;
    modalPizzaType.textContent = 'PIZZA ' + recipient.toUpperCase();
    modalPizzaDesc.textContent = descMap[recipient];
    modalPizzaPrice.textContent = priceMap[recipient];
    modalPizzaCantidad.value = 1;
    modalPizzaTam.value = 0;

    // initialize product
    originalPrice = $("#productPrice").text();
    newPrice = originalPrice;
})


$(document).ready(function () {
    
    console.log('Modal here!');

    $("#cantidadPizza").change(function () {        
        var cantidad = $("#cantidadPizza").val();
        var subtotal = cantidad * newPrice;
        $("#productPrice").html(subtotal);
    });

    $("#tamPizza").change(function () {
        var currentValue = $("#tamPizza").val();
        newPrice = originalPrice;       
        if (currentValue == 1) 
        {
            newPrice = parseInt(newPrice) + 60;
        }
        else if (currentValue == 2)
        {
            newPrice = parseInt(newPrice) + 120;
        }
        
        var cantidad = $("#cantidadPizza").val();
        var subtotal = cantidad * newPrice;
        $("#productPrice").html(subtotal);
    });
});