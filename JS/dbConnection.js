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