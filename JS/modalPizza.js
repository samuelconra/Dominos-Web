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
    var modalImage = pizzaModal.querySelector('#modalPizza-image');
    var modalPizzaType = pizzaModal.querySelector('#nombrePizza')
    var modalPizzaDesc = pizzaModal.querySelector('#pizza-descripcion')
    var modalPizzaPrice = pizzaModal.querySelector('#pizzaPrice')
    var modalPizzaCantidad = pizzaModal.querySelector('#cantidadPizza')
    var modalPizzaTam = pizzaModal.querySelector('#tamPizza')

    var imageMap = {
        "pepperoni": "pizza-pepperoni.jpeg",
        "hawaiana": "pizza-hawaiana.jpg",
        "mexicana": "pizza-mexicana.jpg",
        "cheesy": "pizza-cheesy.jpg",
        "deluxe": "pizza-deluxe.jpg",
        "fugazzeta": "pizza-fugazzeta.jpg",
        "napolitana": "pizza-napolitana.jpg",
        "texas": "pizza-texas.jpg"
    };

    var descMap = {
        "pepperoni": "La original y clásica masa fresca hecha al momento con orilla dorada y espolvoreada de especias que le dan nuestro toque único.",
        "hawaiana": "La original y clásica masa fresca hecha al momento con orilla dorada y espolvoreada de especias que le dan nuestro toque único.",
        "mexicana": "Sabor explosivo con queso fundido, jalapeños picantes, carne sazonada y salsa vibrante. ¡Viaje directo a México en cada bocado!",
        "cheesy": "Una oda al queso: mozzarella derretida, cheddar cremoso y parmesano en una fiesta de texturas. ¡Irresistiblemente deliciosa!",
        "deluxe": "Elegancia en cada rebanada con ingredientes premium: tomates frescos, champiñones, aceitunas y una mezcla de quesos exquisita. ¡La indulgencia hecha pizza!",
        "fugazzeta": "Tradición argentina en su máxima expresión. Cebolla caramelizada, queso y una masa esponjosa. ¡Un clásico irresistible que te transportará a Buenos Aires!",
        "napolitana": "Auténtico sabor italiano con tomates San Marzano, mozzarella de búfala y albahaca fresca sobre masa fina. ¡Una obra maestra napolitana en cada bocado!",
        "texas": "Una explosión de sabores del sur con salsa BBQ ahumada, pollo jugoso, cebolla caramelizada y queso cheddar. ¡Sabor texano a la parrilla en cada rebanada!"
    }

    var priceMap = {
        "pepperoni": "99.99",
        "hawaiana": "109.99",
        "mexicana": "109.99",
        "cheesy": "119.99",
        "deluxe": "139.99",
        "fugazzeta": "119.99",
        "napolitana": "109.99",
        "texas": "119.99"
    }

    //   modalTitle.textContent = 'New message to ' + recipient
    //   modalBodyInput.value = recipient

    modalImage.src = 'Images/Food/' + imageMap[recipient] || 'imagen_defecto.jpg';
    modalImage.alt = recipient;
    modalPizzaType.textContent = 'PIZZA ' + recipient.toUpperCase();
    modalPizzaDesc.textContent = descMap[recipient];
    modalPizzaPrice.textContent = priceMap[recipient];
    modalPizzaCantidad.value = 1;
    modalPizzaTam.value = 'Individual';

    // initialize product
    originalPrice = $("#pizzaPrice").text();
    newPrice = originalPrice;
})


$(document).ready(function () {
    $("#cantidadPizza").change(function () {        
        var cantidad = $("#cantidadPizza").val();
        var subtotal = cantidad * newPrice;
        $("#pizzaPrice").html(subtotal.toFixed(2));
    });

    $("#tamPizza").change(function () {
        var currentValue = $("#tamPizza").val();
        newPrice = originalPrice;       
        if (currentValue == 'Mediana') 
        {
            newPrice = parseInt(newPrice) + 30;
        }
        else if (currentValue == 'Grande')
        {
            newPrice = parseInt(newPrice) + 60;
        }
        
        var cantidad = $("#cantidadPizza").val();
        var subtotal = cantidad * newPrice;
        $("#pizzaPrice").html(subtotal.toFixed(2));
    });
});