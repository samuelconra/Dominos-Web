// $(document).ready(function () {
//   // personalizar pizza
//   $(".txt-tam").text($("#pizza-tam").val())
//   $(".txt-masa").text($("#pizza-masa").val())
//   $(".txt-completa").text($("#quesoMozzarela").val())

//   htmlIcons = `
//     <button class="icon-circulo-mitad-izquierda icono-circulo"></button>
//     <button class="icon-circulo-completo icono-circulo active-btn-1"></button>
//     <button class="icon-circulo-mitad-derecha icono-circulo"></button>
//     `;

//   // Agrega un controlador de eventos para el cambio del checkbox
//   $("#pepperoni-checkbox").change(function () {
//     // Verifica si el checkbox está marcado
//     if ($("#pepperoni-checkbox").prop('checked')) {
//         // Muestra el mensaje si el checkbox está marcado
//         $("#div-pepperoni").html(htmlIcons);
//     } else {
//         // Limpia el mensaje si el checkbox no está marcado
//         $("#div-pepperoni").html('');;
//         mensaje.text('');
//     }
//   });

  
  
//   $("#pizza-tam").change(function () {
//     $(".txt-tam").text($("#pizza-tam").val())
//   })
//   $("#pizza-masa").change(function () {
//     $(".txt-masa").text($("#pizza-masa").val())
//   })


// });



// var btns = document.getElementById("div-mitades-queso").getElementsByClassName("icono-circulo");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active-btn-1");

//     // If there's no active class
//     if (current.length > 0) { 
//       current[0].className = current[0].className.replace(" active-btn-1", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active-btn-1";
//   });
// }

// var btns = document.getElementById("div-mitades-salsa").getElementsByClassName("icono-circulo");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active-btn-2");

//     if (current.length > 0) { 
//       current[0].className = current[0].className.replace(" active-btn-2", "");
//     }
//     this.className += " active-btn-2";
//   });
// }

$(document).ready(function () {
  $('.ingrediente-checkbox').change(function () {
    var buttonContainer = $(this).siblings('.contenedor-mitades');
    buttonContainer.slideToggle();
  });

  $('.icono-circulo').click(function () {
      // Desactivar todos los botones hermanos
      $(this).siblings('.icono-circulo').removeClass('active-mitad');

      // Alternar la clase active del botón clicado
      $(this).toggleClass('active-mitad');
  });
});