// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, setDoc, doc, collection, addDoc, getDocs, onSnapshot, query } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';

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
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    $('#cantidad-carrito').html(querySnapshot.size - 1)
});

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
    var price = $("#pizzaPrice").text();

    //agregar datos
    const docRef = addDoc(collection(db, "Carrito"), {
     Producto: name,
     Cantidad: quantity,
     Tamaño: size,
     Precio: price,
     Tipo: 1
    });
});

$("#btnAgregarPollo").click(function () {
    var name = $("#nombrePollo").text();
    var size = $("#tamPollo").val();
    var quantity = $("#cantidadPollo").val();
    var price = $("#polloPrice").text();

    //agregar datos
    const docRef = addDoc(collection(db, "Carrito"), {
     Producto: name,
     Cantidad: quantity,
     Tamaño: size,
     Precio: price,
     Tipo: 2
    });
});

$("#btnAgregarBebida").click(function () {
    var name = $("#nombreBebida").text();
    var size = $("#tamBebida").val();
    var quantity = $("#cantidadBebida").val();
    var price = $("#bebidaPrice").text();

    //agregar datos
    const docRef = addDoc(collection(db, "Carrito"), {
     Producto: name,
     Cantidad: quantity,
     Tamaño: size,
     Precio: price,
     Tipo: 3
    });
});

$("#btnAgregarPostre").click(function () {
    var name = $("#nombrePostre").text();
    var quantity = $("#cantidadPostre").val();
    var price = $("#postrePrice").text();

    //agregar datos
    const docRef = addDoc(collection(db, "Carrito"), {
     Producto: name,
     Cantidad: quantity,
     Precio: price,
     Tipo: 4
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
                <button class="btn-sucursal" value="${value}" data-bs-target="#sucursalAgregada" data-bs-toggle="modal">Seleccionar</button>
            </div>
        </div>
    </div>
    `;
    return htmlCard;
}


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
        if (queso == 'Extra'){
            precio += 10;
        }
    } else {
        precio -= 15;
    }
    
    precio += ($('.ingrediente-checkbox:checked').length * 8);
    precio *= cantidad;

    const docRef = addDoc(collection(db, "Carrito"), {
        Producto: pizza,
        Izquierda: izquierda,
        Derecha: derecha,
        Completa: completa,
        Cantidad: cantidad,
        Precio: precio.toFixed(2),
        Tipo: 5
    });
});

// agregar productos al carrito



// const products = query(collection(db, "Carrito"));
// var carritoPizzas = "";
// const consultProducts = onSnapshot(products, (querySnapshot) => {
//     carritoPizzas += createPizzaCard(doc.data().Producto, doc.data().Tamaño, doc.data().Cantidad, doc.data().Precio);
// });



// const product = await getDocs(collection(db, "Carrito"));
// var carritoPizzas = "";
// product.forEach((doc) => {
//     if (doc.data().Precio == 1){
//         carritoPizzas += createPizzaCard(doc.data().Producto, doc.data().Tamaño, doc.data().Cantidad, doc.data().Precio);
//     }
//     else if (doc.data().Precio == 2){
//         carritoPollo += createPolloCard(doc.data().Producto, doc.data().Tamaño, doc.data().Cantidad, doc.data().Precio);
//     }
// });

// $("#productos").html(carritoPizzas);
// $("#productos").html(carritoPollo);

// function createPizzaCard(producto, tam, cantidad, precio) {
//     var htmlCard = `
//     <div class="producto-carrito mt-4" id="idProducto">
//         <a href="" class="eliminar-producto"><i class="fa-solid fa-square-minus"></i></a>
//         <div class="row">
//         <div class="col-5">
//             <img src="Images/Food/pizza-pepperoni.jpeg" alt="pepperoni" width="100%" class="imagen-producto">
//         </div>
//         <div class="col-7" style="height: 100%;">
//             <div>
//             <p class="nombreProducto-carrito">${producto}</p>
//             </div>
//             <div>
//             <p class="tamaño-carrito">Tamaño: ${tam}</p>
//             </div>
//             <div class="producto-caracteristicas align-content-end align-self-end">
//             <div class="div-cantidad">
//                 <input type="number" name="cantidadProducto-carrito" class="cantidadProducto-carrito" value="${cantidad}" min="1" max="5">
//             </div>
//             <div class="div-precio">
//                 <p class="precio-carrito">$${parseFloat(precio).toFixed(2)}</p>
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
//     `;
//     return htmlCard;
// }