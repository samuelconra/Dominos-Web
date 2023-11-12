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

//agregar datos
//const docRef = await addDoc(collection(db, "Ventas"), {
//  NombreProducto: "Samu",
//  Precio: "33.3",
//  Cantidad: 2
//});

// single query
//console.log("Document written with ID: ", docRef.id);
//const querySnapshot = await getDocs(collection(db, "Ventas"));
//querySnapshot.forEach((doc) => {
//  console.log(`${doc.id} => ${doc.data().Precio}`);
//});

//real time
const q = query(collection(db, "Ventas"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {        
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().Precio}`);
});
console.log("-------------")
});