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

console.log('I am in Menu! :)');

// get pizzas
const querySnapshot = await getDocs(collection(db, "Pizzas"));
var pizzasHtmlCards = "";
querySnapshot.forEach((doc) => {
    pizzasHtmlCards += createProductCard(doc.data().Imagen, doc.data().Modal, doc.data().Nombre);
});

// var demoCard = createProductCard("pizza-pepperoni.jpeg", "pepperoni", "Pizza Pepperoni");

$("#menuPizzaDiv").html(pizzasHtmlCards);

function createProductCard(image, modalName, productName) {
    var htmlCard = `
    <div class="col-12 col-md-6 col-lg-4 p-3">
        <div class="tarjeta-menu">
            <img src="/Images/${image}" alt="producto">
            <div class="row mt-3">
                <div class="col-6 text-start">
                    <p>${productName}</p>
                </div>
                <div class="col-6 text-end">
                    <button data-bs-toggle="modal" data-bs-target="#pizzaModal" class="btnComprar" data-bs-whatever="${modalName}">Comprar</button>
                </div>
            </div>
        </div>
    </div>
    `;
    return htmlCard;
}

$("#btnAgregar").click(function () {
    var name = $("#nombrePizza").text();
    var size = $("#tamPizza").val();
    var quantity = $("#cantidadPizza").val();
    var price = $("#productPrice").text();

    //agregar datos
    const docRef = addDoc(collection(db, "Carrito"), {
     Producto: name,
     Quantity: quantity,
     Size: size,
     Price: price,
    });
});