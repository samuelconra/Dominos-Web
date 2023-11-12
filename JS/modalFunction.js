var pizzaModal = document.getElementById('pizzaModal')
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
    var modalPizzaPrice = pizzaModal.querySelector('.pizza-precio')

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
        "pepperoni": "$120",
        "hawaiana": "$129",
        "mexicana": "$159",
        "cheesy": "$139",
        "deluxe": "$559"
    }

    //   modalTitle.textContent = 'New message to ' + recipient
    //   modalBodyInput.value = recipient

    modalImage.src = 'Images/' + imageMap[recipient] || 'imagen_defecto.jpg';
    modalImage.alt = recipient;
    modalPizzaType.textContent = 'PIZZA ' + recipient.toUpperCase();
    modalPizzaDesc.textContent = descMap[recipient];
    modalPizzaPrice.textContent = 'Subtotal: ' + priceMap[recipient];
})



$(document).ready(function(){
    
    $("#btnAgregar").click(function(){
        console.log("men");
        console.log($("#cantidadPizza").val())
    });

    $("#cantidadPizza").change(function(){
        var string = "Subtotal: $";
        var cantidad = $("#cantidadPizza").val();
        var total = cantidad * 120; 
        $(".pizza-precio").html(string + total);
    });
});