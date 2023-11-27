$(document).ready(function () {
    var checkboxLimit = 5;

    // funcionalidad checkbox y btns mitades
    $('.ingrediente-checkbox').change(function () {
        if ($('.ingrediente-checkbox:checked').length <= checkboxLimit) {
            var buttonContainer = $(this).siblings('.contenedor-mitades');
            buttonContainer.slideToggle();
        }
    });
    
    $('.icono-circulo').click(function () {
        // Desactivar todos los botones hermanos
        $(this).siblings('.icono-circulo').removeClass('active-mitad');

        // Alternar la clase active del botón clicado
        $(this).toggleClass('active-mitad');
    });

    // funcionalidad checkbox queso y salsa
    $('.queso-checkbox').change(function () {
        var selectorContainer = $(this).siblings('.queso-select');
        selectorContainer.slideToggle();
        selectorContainer.val('Normal');
    });

    // cambiar imagen de pizza base
    $("#pizza-masa").change(function () {  
        var masaSelected = $("#pizza-masa").val()

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

    // agregar y eliminar ingredientes
    $("#quesoMozzarela").change(function () { 
        if ($(this).prop('checked')) {
            var cheeseImage = `<img src="/Images/cheese-icon.png" alt="cheese-icon" class="cheese-icon">`;
            $(".contenedor-imagen-pizza").append(cheeseImage);
        } else {
            $("img").remove(`.cheese-icon`);
        }
    });
    $("#salsaTomate").change(function () { 
        if ($(this).prop('checked')) {
            var tomatoImage = `<img src="/Images/tomato-icon.png" alt="tomato-icon" class="tomato-icon">`;
            $(".contenedor-imagen-pizza").append(tomatoImage);
        } else {
            $("img").remove(`.tomato-icon`);
        }
    });

    $(".ingrediente-checkbox").change(function () { 
        var ingredient = $(this).val()
        var buttonContainer = $(this).siblings('.contenedor-mitades');

        if ($(this).prop('checked') && $('.ingrediente-checkbox:checked').length <= checkboxLimit) {
            ingredientImageLeft = `<img src="/Images/Ingredientes/${ingredient}.png" alt="${ingredient}" class="ingrediente-izquierdo" id="${ingredient}Izquierdo">`;
            ingredientImageRight = `<img src="/Images/Ingredientes/${ingredient}.png" alt="${ingredient}" class="ingrediente-derecho" id="${ingredient}Derecho">`;
            $(".contenedor-imagen-pizza").append(ingredientImageLeft);
            $(".contenedor-imagen-pizza").append(ingredientImageRight);
        } else {
            $("img").remove(`#${ingredient}Izquierdo`);
            $("img").remove(`#${ingredient}Derecho`);

            buttonContainer.find('.icono-circulo.active-mitad').removeClass('active-mitad');
            buttonContainer.find('.icono-circulo:eq(1)').addClass('active-mitad');
        }
    });

    $(".ingrediente-checkbox").change(function () { 
        var checkedCheckboxes = $('.ingrediente-checkbox:checked');
        if (checkedCheckboxes.length > checkboxLimit) {
            // Deshabilitar checkboxes adicionales
            $(this).prop('checked', false);
            $('#limit-modal').show()

            setTimeout(function() {
                $('#limit-modal').hide()
            }, 4000);
        } 
    });

    // dividir img de ingredientes en mitades
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


    // personalizacion pizza apartado
    var ingredientesCompleta = ['Queso Mozzarela', 'Salsa de Tomate']
    var ingredientesIzquierda = []
    var ingredientesDerecha = []

    var ingrediente
    var ingredientes
    
    // tamaño de pizza y masa
    $("#pizza-tam").change(function () {
        $(".txt-tam").text($("#pizza-tam").val())
    })
    $("#pizza-masa").change(function () {
        $(".txt-masa").text($("#pizza-masa").val())
    })

    // queso y salsa
    $(".queso-checkbox").change(function () {
        ingrediente = $(this).val()
        if ($(this).prop('checked')) {
            ingredientesCompleta.push(ingrediente)
        } else {
            ingredientesCompleta = ingredientesCompleta.filter(function(value) {
                return value !== ingrediente;
            });        
            ingredientesCompleta = ingredientesCompleta.filter(function(value) {
                return value !== ingrediente + ' Extra';
            });        
        }

        ingredientes = ingredientesCompleta.join(', ');
        $(".txt-completa").text(ingredientes)

        if (ingredientesCompleta.length == 0){
            $(".txt-completa").text('Sin Ingredientes')
        }
    })

    // queso y salsa EXTRA
    $(".queso-select").change(function () {
        if ($(this).val() == 'Extra'){

            if ($(this).attr('id') == 'quesoSelector'){
                ingredientesCompleta.forEach(function(elemento, index, array) {
                    if (elemento === 'Queso Mozzarela') {
                        array[index] = 'Queso Mozzarela Extra';
                    }
                });
            } else {
                ingredientesCompleta.forEach(function(elemento, index, array) {
                    if (elemento === 'Salsa de Tomate') {
                        array[index] = 'Salsa de Tomate Extra';
                    }
                });
            }
        } else {
            if ($(this).attr('id') == 'quesoSelector'){
                ingredientesCompleta.forEach(function(elemento, index, array) {
                    if (elemento === 'Queso Mozzarela Extra') {
                        array[index] = 'Queso Mozzarela';
                    }
                });
            } else {
                ingredientesCompleta.forEach(function(elemento, index, array) {
                    if (elemento === 'Salsa de Tomate Extra') {
                        array[index] = 'Salsa de Tomate';
                    }
                });
            }
        }

        ingredientes = ingredientesCompleta.join(', ');
        $(".txt-completa").text(ingredientes)
    })

    // agregar ingredientes a apartado
    $(".ingrediente-checkbox").change(function () { 
        ingrediente = $(this).val()
        ingrediente = ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1);

        if ($(this).prop('checked')) {
            ingredientesCompleta.push(ingrediente)
        } else {
            ingredientesCompleta = ingredientesCompleta.filter(function(value) {
                return value !== ingrediente;
            });          
            ingredientesDerecha = ingredientesDerecha.filter(function(value) {
                return value !== ingrediente;
            });          
            ingredientesIzquierda = ingredientesIzquierda.filter(function(value) {
                return value !== ingrediente;
            });          
        }

        ingredientes = ingredientesCompleta.join(', ');
        $(".txt-completa").text(ingredientes)
        ingredientes = ingredientesIzquierda.join(', ');
        $(".txt-lado-izquierdo").text(ingredientes)
        ingredientes = ingredientesDerecha.join(', ');
        $(".txt-lado-derecho").text(ingredientes)

        if (ingredientesCompleta.length == 0){
            $(".txt-completa").text('Sin Ingredientes')
        }
        if (ingredientesIzquierda.length == 0){
            $(".txt-lado-izquierdo").text('Sin Ingredientes')
        }
        if (ingredientesDerecha.length == 0){
            $(".txt-lado-derecho").text('Sin Ingredientes')
        }
    });

    $('.icono-circulo').click(function () {
        var pizzaSide = $(this).val()
        ingrediente = $(this).closest(".contenedor-mitades").data('ingrediente');
        ingrediente = ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1);
        
        if (pizzaSide == 'izquierda'){
            ingredientesIzquierda.push(ingrediente)

            ingredientesCompleta = ingredientesCompleta.filter(function(value) {
                return value !== ingrediente;
            });          
            ingredientesDerecha = ingredientesDerecha.filter(function(value) {
                return value !== ingrediente;
            });
        }
        else if(pizzaSide == 'completa'){
            ingredientesCompleta.push(ingrediente)
            
            ingredientesDerecha = ingredientesDerecha.filter(function(value) {
                return value !== ingrediente;
            });          
            ingredientesIzquierda = ingredientesIzquierda.filter(function(value) {
                return value !== ingrediente;
            });   
        }
        else{
            ingredientesDerecha.push(ingrediente)

            ingredientesCompleta = ingredientesCompleta.filter(function(value) {
                return value !== ingrediente;
            });                 
            ingredientesIzquierda = ingredientesIzquierda.filter(function(value) {
                return value !== ingrediente;
            });   
        }

        ingredientes = ingredientesCompleta.join(', ');
        $(".txt-completa").text(ingredientes)
        ingredientes = ingredientesIzquierda.join(', ');
        $(".txt-lado-izquierdo").text(ingredientes)
        ingredientes = ingredientesDerecha.join(', ');
        $(".txt-lado-derecho").text(ingredientes)

        if (ingredientesCompleta.length == 0){
            $(".txt-completa").text('Sin Ingredientes')
        }
        if (ingredientesIzquierda.length == 0){
            $(".txt-lado-izquierdo").text('Sin Ingredientes')
        }
        if (ingredientesDerecha.length == 0){
            $(".txt-lado-derecho").text('Sin Ingredientes')
        }
    });

    // cambiar cantidad de tarjetas
    $(".cantidadProducto").change(function () {
        var cantidad = $(this).val()
        $(".cantidadProducto").val(cantidad)
    })
});