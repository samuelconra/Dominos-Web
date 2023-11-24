$(document).ready(function () {
    $("#pizza-masa").change(function () {  
        var masaSelected = $("#pizza-masa").val()
        console.log(masaSelected)

        if (masaSelected == 'Original')
        {
            $(".imagen-pizza-base").attr("src", "/Images/Pizza-Base.png")
        }
        else if (masaSelected == 'Orilla de Queso')
        {
            $(".imagen-pizza-base").attr("src", "/Images/Pizza-Base-Queso.png")
        }
        else
        {
            $(".imagen-pizza-base").attr("src", "/Images/Pizza-Base-Crunchy.png")
        }
    });

    $(".ingrediente-checkbox").change(function () { 
        var ingredient = $(this).val()
        var buttonContainer = $(this).siblings('.contenedor-mitades');

        if ($(this).prop('checked')) {
            ingredientImageLeft = `<img src="/Images/Ingredientes/${ingredient}.png" alt="${ingredient}" class="ingrediente-izquierdo" id="${ingredient}Izquierdo">`
            ingredientImageRight = `<img src="/Images/Ingredientes/${ingredient}.png" alt="${ingredient}" class="ingrediente-derecho" id="${ingredient}Derecho">`
            $(".contenedor-imagen-pizza").append(ingredientImageLeft);
            $(".contenedor-imagen-pizza").append(ingredientImageRight);
        } else {
            $("img").remove(`#${ingredient}Izquierdo`);
            $("img").remove(`#${ingredient}Derecho`);

            buttonContainer.find('.icono-circulo.active-mitad').removeClass('active-mitad');
            buttonContainer.find('.icono-circulo:eq(1)').addClass('active-mitad');
        }
        
    });

    $('.icono-circulo').click(function () {
        var pizzaSide = $(this).val()
        var ingredient = $(this).closest(".contenedor-mitades").data('ingrediente');
        ingredientImageLeft = `<img src="/Images/Ingredientes/${ingredient}.png" alt="${ingredient}" class="ingrediente-izquierdo" id="${ingredient}Izquierdo">`
        ingredientImageRight = `<img src="/Images/Ingredientes/${ingredient}.png" alt="${ingredient}" class="ingrediente-derecho" id="${ingredient}Derecho">`
        
        if (pizzaSide == 'izquierda'){
            $(".contenedor-imagen-pizza").append(ingredientImageLeft);
            $("img").remove(`#${ingredient}Derecho`);
        }
        else if(pizzaSide == 'completa'){
            $(".contenedor-imagen-pizza").append(ingredientImageLeft);
            $(".contenedor-imagen-pizza").append(ingredientImageRight);
        }
        else{
            $(".contenedor-imagen-pizza").append(ingredientImageRight);
            $("img").remove(`#${ingredient}Izquierdo`);
        }
    });
});