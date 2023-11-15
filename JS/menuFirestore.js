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

// Actualiza cantidad de productos
const querySnapshotCarrito = await getDocs(collection(db, "Carrito"));
$('#cantidad-carrito').html(querySnapshotCarrito.size)

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
            <img src="/Images/${image}" alt="${modalName}">
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
    });
});

$("#btnCerrarCompra").click(function () {
    $('#cantidad-carrito').html(querySnapshotCarrito.size)
})


// const querySnapshot1 = await getDocs(collection(db, "Carrito"));
// const querySnapshotCarrito = query(collection(db, "Carrito"));
// const cantidadCarrito = onSnapshot(querySnapshotCarrito, (querySnapshot1) => {
//     $('#cantidad-carrito').html(querySnapshotCarrito.size)
// });


// const querySnapshotCarrito = await getDocs(collection(db, "Carrito"));
// $(document).ready(function () {
//     $('#cantidad-carrito').html(querySnapshotCarrito.size)
// });
