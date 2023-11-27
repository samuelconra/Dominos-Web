// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, setDoc, doc, collection, addDoc, getDocs, onSnapshot, query, deleteDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCryOzMOuevyB0E0dyQ6LLDjxznRZ6SPNU",
    authDomain: "dominospizza-38457.firebaseapp.com",
    projectId: "dominospizza-38457",
    storageBucket: "dominospizza-38457.appspot.com",
    messagingSenderId: "144566719191",
    appId: "1:144566719191:web:d5cadecbe501cf41969692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// actualizar numero de elementos en carrito
const q = query(collection(db, "Carrito"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     $('#cantidad-carrito').html(querySnapshot.size - 1)
// });

// get pizzas
const querySnapshotPizzas = await getDocs(collection(db, "Pizzas"));
var pizzasHtmlCards = "";
querySnapshotPizzas.forEach((doc) => {
    pizzasHtmlCards += createProductCard(doc.data().Imagen, doc.data().Modal, doc.data().Nombre, 'pizza');
});

// get pollo
const querySnapshotPollo = await getDocs(collection(db, "Pollo"));
var polloHtmlCards = "";
querySnapshotPollo.forEach((doc) => {
    polloHtmlCards += createProductCard(doc.data().Imagen, doc.data().Modal, doc.data().Nombre, 'pollo');
});

// get bebidas
const querySnapshotBebidas = await getDocs(collection(db, "Bebidas"));
var bebidasHtmlCards = "";
querySnapshotBebidas.forEach((doc) => {
    bebidasHtmlCards += createProductCard(doc.data().Imagen, doc.data().Modal, doc.data().Nombre, 'bebidas');
});

// get postres
const querySnapshotPostres = await getDocs(collection(db, "Postres"));
var postresHtmlCards = "";
querySnapshotPostres.forEach((doc) => {
    postresHtmlCards += createProductCard(doc.data().Imagen, doc.data().Modal, doc.data().Nombre, 'postre');
});

// var demoCard = createProductCard("pizza-pepperoni.jpeg", "pepperoni", "Pizza Pepperoni");
$("#menuPizzaDiv").html(pizzasHtmlCards);
$("#menuPolloDiv").html(polloHtmlCards);
$("#menuBebidasDiv").html(bebidasHtmlCards);
$("#menuPostreDiv").html(postresHtmlCards);

function createProductCard(image, modalName, productName, modalDestination) {
    var htmlCard = `
    <div class="col-12 col-md-6 col-lg-4 p-3">
        <div class="tarjeta-menu">
            <img src="/Images/Food/${image}" alt="${modalName}">
            <div class="row mt-3">
                <div class="col-6 text-start">
                    <p>${productName}</p>
                </div>
                <div class="col-6 text-end">
                    <button data-bs-toggle="modal" data-bs-target="#${modalDestination}Modal" class="btnComprar" data-bs-whatever="${modalName}">Comprar</button>
                </div>
            </div>
        </div>
    </div>
    `;
    return htmlCard;
}

// FUNCIONALIDAD BOTONES AGREGAR

$("#btnAgregarPizza").click(function () {
    var name = $("#nombrePizza").text();
    var size = $("#tamPizza").val();
    var quantity = $("#cantidadPizza").val();
    var price =  parseFloat($("#pizzaPrice").text()).toFixed(2);
    var image = $("#modalPizza-image").attr('src');
    var originalPrice = price / parseFloat(quantity);

    //agregar datos
    const docRef = addDoc(collection(db, "Carrito"), {
     Producto: name,
     Cantidad: quantity,
     Tamaño: size,
     Precio: price,
     Imagen: image,
     Tipo: 1,
     PrecioOriginal: originalPrice
    });
});

$("#btnAgregarPollo").click(function () {
    var name = $("#nombrePollo").text();
    var size = $("#tamPollo").val();
    var quantity = $("#cantidadPollo").val();
    var price = parseFloat($("#polloPrice").text()).toFixed(2);
    var image = $("#modalPollo-image").attr('src');
    var originalPrice = price / parseFloat(quantity);

    //agregar datos
    const docRef = addDoc(collection(db, "Carrito"), {
     Producto: name,
     Cantidad: quantity,
     Tamaño: size,
     Precio: price,
     Imagen: image,
     Tipo: 2,
     PrecioOriginal: originalPrice
    });
});

$("#btnAgregarBebida").click(function () {
    var name = $("#nombreBebida").text();
    var size = $("#tamBebida").val();
    var quantity = $("#cantidadBebida").val();
    var price = parseFloat($("#bebidaPrice").text()).toFixed(2);
    var image = $("#modalBebida-image").attr('src');
    var originalPrice = price / parseFloat(quantity);

    //agregar datos
    const docRef = addDoc(collection(db, "Carrito"), {
     Producto: name,
     Cantidad: quantity,
     Tamaño: size,
     Precio: price,
     Imagen: image,
     Tipo: 3,
     PrecioOriginal: originalPrice
    });
});

$("#btnAgregarPostre").click(function () {
    var name = $("#nombrePostre").text();
    var quantity = $("#cantidadPostre").val();
    var price = parseFloat($("#postrePrice").text()).toFixed(2);
    var image = $("#modalPostre-image").attr('src');
    var originalPrice = price / parseFloat(quantity);

    //agregar datos
    const docRef = addDoc(collection(db, "Carrito"), {
     Producto: name,
     Cantidad: quantity,
     Precio: price,
     Imagen: image,
     Tipo: 4,
     PrecioOriginal: originalPrice
    });
});

// SUCURSALES
const querySnapshotSucursales = await getDocs(collection(db, "Sucursales"));
var sucursalesHtmlCards = "";
querySnapshotSucursales.forEach((doc) => {
    sucursalesHtmlCards += createSucursalCard(doc.data().Nombre, doc.data().Link, doc.data().Location, doc.data().Telefono, doc.data().Value);
});

$("#sucursales-div").html(sucursalesHtmlCards);

function createSucursalCard(name, link, location, phone, value) {
    var htmlCard = `
    <div class="col-12 col-md-6 col-lg-4 p-4">
        <div class="tarjeta-sucursal">
            <iframe src="${link}" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="info-sucursal text-center">
                <h5>${name}</h5> 
                <p class="mt-3">${location}</p>
                <p>Teléfono: <span style="font-weight: 400;">${phone}</span></p>
            </div>
        </div>
    </div>
    `;
    return htmlCard;
}

{/* <button class="btn-sucursal" value="${value}" data-bs-target="#sucursalAgregada" data-bs-toggle="modal">Seleccionar</button> */}


$(document).ready(function() {
    // carrito en hover
    $(".contenedor-carrito").hover(
        function() {
            $("#carritoCollapse").addClass("show");
        },
        function() {
            $("#carritoCollapse").removeClass("show");
        }
    );

    $("#carritoCollapse").hover(
        function() {
            $(this).addClass("show");
        },
        function() {
            $(this).removeClass("show");
        }
    );
});

// agregar pizza personalizada a carrito
$('.btnAgregarProducto').click(function () {
    var pizza = $("#pizza-main").text();
    var izquierda = $("#txt-izquierdo").text();
    var derecha = $("#txt-derecho").text();
    var completa = $("#txt-completa").text();
    var cantidad = $("#txt-cantidad").val();
    var precio = 109.99

    var tam = $("#pizza-tam").val();
    var masa = $("#pizza-masa").val();
    var queso = $("#quesoSelector").val();
    var salsa = $("#salsaSelector").val();

    if (tam == 'Mediana') {
        precio += 30;
    } 
    else if (tam == 'Grande') {
        precio += 60;
    }

    if (masa == 'Orilla de Queso') {
        precio += 20;
    } 
    else if (masa == 'Crunchy') {
        precio += 10;
    }

    if ($('#quesoMozzarela').prop('checked')) {
        if (queso == 'Extra'){
            precio += 10;
        }
    } else {
        precio -= 15;
    }
    
    if ($('#salsaTomate').prop('checked')) {
        if (salsa == 'Extra'){
            precio += 10;
        }
    } else {
        precio -= 15;
    }
    
    precio += ($('.ingrediente-checkbox:checked').length * 8);
    var originalPrice = precio;
    precio *= cantidad;

    const docRef = addDoc(collection(db, "Carrito"), {
        Producto: pizza,
        Tamaño: tam,
        Masa: masa,
        Izquierda: izquierda,
        Derecha: derecha,
        Completa: completa,
        Cantidad: cantidad,
        Precio: precio.toFixed(2),
        Tipo: 5,
        PrecioOriginal: originalPrice
    });
});

// agregar productos al carrito
const product = await getDocs(collection(db, "Carrito"));
var arrayID = []
const consultProducts = onSnapshot(q, (querySnapshot) => {
    var cantidadProductos = (querySnapshot.size - 1)
    $('#cantidad-carrito').html(cantidadProductos)
    $("#productos").empty();

    var carritoProductos = "";
    var carritoPostres = "";
    var carritoPersonalizadas = "";
    var subtotal = 0
    arrayID = []

    if (cantidadProductos == 0){
        $("#productos").append(noProductsText());
        $('#btn-completar').removeAttr('data-bs-target', '#compraExitosa');
        $('#btn-completar').removeAttr('data-bs-toggle', 'modal');
    }
    else{
        $('#btn-completar').attr('data-bs-target', '#compraExitosa');
        $('#btn-completar').attr('data-bs-toggle', 'modal');
    }

    if ($("#correoUser").val().length < 1){
        $('#btn-completar').removeAttr('data-bs-target', '#compraExitosa');
        $('#btn-completar').removeAttr('data-bs-toggle', 'modal');
    }

    querySnapshot.forEach((doc) => {
        if (doc.data().Tipo == 1 || doc.data().Tipo == 2 || doc.data().Tipo == 3){
            carritoProductos += createProductsCard(doc.id, doc.data().Producto, doc.data().Tamaño, doc.data().Cantidad, doc.data().Precio, doc.data().Imagen, doc.data().PrecioOriginal);
            subtotal += parseFloat(doc.data().Precio);
            arrayID.push(doc.id)
        }
        else if (doc.data().Tipo == 4){
            carritoPostres += createPostreCard(doc.id, doc.data().Producto, doc.data().Cantidad, doc.data().Precio, doc.data().Imagen, doc.data().PrecioOriginal);
            subtotal += parseFloat(doc.data().Precio);
            arrayID.push(doc.id)
        }
        else if (doc.data().Tipo == 5){
            carritoPersonalizadas += createPersonalizadaCard(doc.id, doc.data().Tamaño, doc.data().Masa, doc.data().Completa, doc.data().Izquierda, doc.data().Derecha, doc.data().Cantidad, doc.data().Precio, doc.data().PrecioOriginal);
            subtotal += parseFloat(doc.data().Precio);
            arrayID.push(doc.id)
        }
    });

    $("#productos").append(carritoProductos);
    $("#productos").append(carritoPostres);
    $("#productos").append(carritoPersonalizadas);

    $("#subtotal-carrito").text('$' + parseFloat(subtotal).toFixed(2));

});


function noProductsText() {
    var htmlCard = `
    <p class="carrito-vacio">TU CARRITO ESTÁ VACIO</p>
    `;
    return htmlCard;
}

function createProductsCard(id, producto, tam, cantidad, precio, imagen, precioOriginal) {
    var htmlCard = `
    <div class="producto-carrito mb-4">
        <button class="eliminar-producto" id="${id}"><i class="fa-solid fa-square-minus"></i></button>
        <div class="row">
        <div class="col-5">
            <img src="${imagen}" alt="pepperoni" width="100%" class="imagen-producto">
        </div>
        <div class="col-7" style="height: 100%;">
            <div>
            <p class="nombreProducto-carrito">${producto}</p>
            </div>
            <div>
            <p class="tamaño-carrito"><span class="espec-nom">Tamaño: </span>${tam}</p>
            </div>
            <div class="producto-caracteristicas align-content-end align-self-end">
            <div class="div-cantidad">
                <input type="number" name="cantidadProducto-carrito" class="cantidadProducto-carrito" value="${cantidad}" min="1" max="5" data-id="${id}" data-precio="${precio}" data-precioOriginal="${precioOriginal}">
            </div>
            <div class="div-precio">
                <p class="precio-carrito">$${parseFloat(precio).toFixed(2)}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    `;
    return htmlCard;
}

function createPostreCard(id, producto, cantidad, precio, imagen, precioOriginal) {
    var htmlCard = `
    <div class="producto-carrito mb-4">
        <button class="eliminar-producto" id="${id}"><i class="fa-solid fa-square-minus"></i></button>
        <div class="row">
        <div class="col-5">
            <img src="${imagen}" alt="pepperoni" width="100%" class="imagen-producto">
        </div>
        <div class="col-7" style="height: 100%;">
            <div>
            <p class="nombreProducto-carrito">${producto}</p>
            </div>
            <div class="producto-caracteristicas align-content-end align-self-end mt-3">
            <div class="div-cantidad">
                <input type="number" name="cantidadProducto-carrito" class="cantidadProducto-carrito" value="${cantidad}" min="1" max="5" data-id="${id}" data-precio="${precio}" data-precioOriginal="${precioOriginal}">
            </div>
            <div class="div-precio">
                <p class="precio-carrito">$${parseFloat(precio).toFixed(2)}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    `;
    return htmlCard;
}

function createPersonalizadaCard(id, tam, masa, completa, izquierda, derecha, cantidad, precio, precioOriginal) {
    var htmlCard = `
    <div class="producto-carrito mb-4">
        <button class="eliminar-producto" id="${id}" style="top: -4%;"><i class="fa-solid fa-square-minus"></i></button>
        <div class="row">
            <div class="col-5">
            <img src="Images/Pizza-Base.png" alt="pepperoni" width="100%" class="imagen-producto">
            </div>
            <div class="col-7" style="height: 100%;">
            <div>
                <p class="nombreProducto-carrito">Pizza Personalizada</p>
            </div>
            <div>
                <p class="espec-carrito"><span class="espec-nom">Tamaño: </span>${tam}</p>
                <p class="espec-carrito"><span class="espec-nom">Masa: </span>${masa}</p>
                <p class="espec-carrito mt-2"><span class="espec-nom">Completa: </span>${completa}</p>
                <p class="espec-carrito"><span class="espec-nom">Izquierda: </span>${izquierda}</p>
                <p class="espec-carrito"><span class="espec-nom">Derecha: </span>${derecha}</p>

            </div>
            <div class="producto-caracteristicas align-content-end align-self-end">
                <div class="div-cantidad">
                    <input type="number" name="cantidadProducto-carrito" class="cantidadProducto-carrito" value="${cantidad}" min="1" max="5" data-id="${id}" data-precio="${precio}" data-precioOriginal="${precioOriginal}">
                </div>
                <div class="div-precio">
                    <p class="precio-carrito">$${parseFloat(precio).toFixed(2)}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    `;
    return htmlCard;
}

// eliminar producto
$(document).on("click", ".eliminar-producto", function () {
    console.log('eliminando...')
    var idProducto = $(this).attr('id');
    deleteDoc(doc(db, 'Carrito', idProducto));
});

$(document).on("click", "#btn-completar", async function () {
    var correo = $("#correoUser").val()
    if (correo.length > 1){
        const querySnapshotCarrito = await getDocs(collection(db, "Carrito"));
        var productosCarrito = []
        var total = 0
        var fechaHoraActual = new Date();
        var sucursal = $("#sucursales-select").val()
        querySnapshotCarrito.forEach((doc) => {
            if (doc.id != "Existe"){
                var infoProducto = doc.data()
                console.log(doc.data().Precio)
                total += parseFloat(doc.data().Precio)
                productosCarrito.push(infoProducto)
            }
        });
        const docRef = addDoc(collection(db, "Ventas"), {
            Productos: productosCarrito,
            Total : total.toFixed(2),
            Fecha: fechaHoraActual,
            Sucursal: sucursal,
            Correo: correo
        });
    
        arrayID.forEach(element => {
            deleteDoc(doc(db, 'Carrito', element));
        });
    }
    else{
        alert("INSERTE UN CORREO ELECTRÓNICO");
    }

});

$(document).on("change", ".cantidadProducto-carrito", function () {
    var nuevaCantidad = $(this).val();
    var precioOriginal = parseFloat($(this).data("preciooriginal"));
    console.log(precioOriginal)
    var nuevoPrecio = parseFloat((precioOriginal) * parseFloat(nuevaCantidad)).toFixed(2);
    var idProducto = $(this).data("id");

    
    const update = doc(db, 'Carrito', idProducto);
    updateDoc(update, {
        Cantidad: nuevaCantidad,
        Precio: nuevoPrecio
    });
});

// funcionamiento sucursal select
$(document).on("change", "#sucursales-select", function () {
    var sucursalNueva = $(this).val();

    var sucursalMap = {
        "CARREFOUR": "Blvd. Antonio Madrazo Esq. Blvd. Guanajuato S/N, Las Trojes, 37227 León de los Aldama, Gto.",
        "LA MARINA": "Blvrd Jose María Morelos 702, El Palmar, San Nicolas del Palote, 37109 León de los Aldama, Gto.",
        "GALERÍAS": "Blvd. Juan Alonso de Torres Pte. 1315, 37200 León de los Aldama, Gto.",
        "PLAZA MAYOR": "Blvd. Las Torres 2301, Panorama, 37160 León de los Aldama, Gto.",
        "MALECÓN": "Blvr. Mariano Escobedo Pte.  A518,  León de los Aldama, Gto.",
        "ARBIDE": "C. Nicaragua 801, Arbide, 37360 León de los Aldama, Gto."
    }

    $("#sucursal-entrega").html(sucursalMap[sucursalNueva])
});
$(document).on("change", "#correoUser", function () {
    if ($("#correoUser").val().length > 1){
        $('#btn-completar').attr('data-bs-target', '#compraExitosa');
        $('#btn-completar').attr('data-bs-toggle', 'modal');
    }
});

