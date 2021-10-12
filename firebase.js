// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
// import { auth, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';
// import { firestore } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js';
const firebaseConfig = {
    apiKey: "AIzaSyA12E98UfraYKcCFxIoC8QyRooXnlumn1A",
    authDomain: "ciclo3misiontic-b9088.firebaseapp.com",
    projectId: "ciclo3misiontic-b9088",
    storageBucket: "ciclo3misiontic-b9088.appspot.com",
    messagingSenderId: "953197985528",
    appId: "1:953197985528:web:8e5b859b8f4e488dd4050d",
    measurementId: "G-QYRQFL4T7G"
};
//Declaracion variables y constantes
const signupform = document.getElementById('form-signup');
const logOut = document.getElementById('logOut');
const signInGoogle = document.getElementById('btnLogIn');
const signUpMail = document.getElementById('btnSignUp');
const usuario = document.getElementById('navbarDropdown');
const modalLogIn = new bootstrap.Modal(document.getElementById('logInModal'),{keyboard: false});


//Funciones
function bye() {
    auth.signOut();
    
}

logOut.addEventListener('click', () => {
    bye();
    console.log('se salio');
    logOut.classList.add('visually-hidden');
    signInGoogle.classList.remove('visually-hidden');
    signUpMail.classList.remove('visually-hidden');
    alertRegistro('Saliste de manera segura', 'success')
    usuario.classList.add('visually-hidden');
});

// onAuthStateChanged(auth, user => {
//     if (user != null) {
//         console.log('logged in!' + user.email);
//         console.log(user.user);
//     } else {
//         console.log('no user');
//     }
// });

//
const fireApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(fireApp);
const proveedor = new firebase.auth.GoogleAuthProvider();
const database = firebase.firestore();

function cambioValor(id, valor){
    let element = document.getElementById(id);
    element.value = valor;
}

async function loginGmail() {
    try {
        const respuesta = await auth.signInWithPopup(proveedor)
        console.log(respuesta.user);
        logOut.classList.remove('visually-hidden');
        signInGoogle.classList.add('visually-hidden');
        signUpMail.classList.add('visually-hidden');
        usuario.classList.remove('visually-hidden');
        cambioValor('logOut', 'jeje')
        
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

//
signInGoogle.addEventListener('click', (e) =>{
    
    loginGmail()
    
})
// createUserWithEmailAndPassword(auth, 'josesito@jeje.com', 'contrasela789')
//             .then((userCredential) => {
//                 // Signed in
//                 const usuario = userCredential.user;
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // ..
//             });

// var signUpModal = new bootstrap.Modal(document.getElementById('signUpModal'), { keyboard: true });
// signupform.addEventListener('submit', (e) => {
//     const NewUser = document.querySelector('#NewUserEmail').value;
//     const NewPsswd = document.querySelector('#NewUserPassword').value;
//     e.preventDefault();
//     console.log('Enviando');
//     createUserWithEmailAndPassword(auth, NewUser, NewPsswd)
//         .then((userCredential) => {
//             // Signed in
//             signUpModal.hide();
//             console.log('se registro')
//             alertRegistro('Se ha registrado exitosamente!', 'success');
//             signUpModal.reset();
//             const usuario = userCredential.user;
//             //alert('Se ha registrado exitosamente');
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;

//         });
// });

// const User = document.querySelector('#UserEmail').value;
// const Psswd = document.querySelector('#UserPassword').value;

// const LogIn = document.querySelector('#form-logIn');
// LogIn.addEventListener('submit', () => {
//     signInWithEmailAndPassword(auth, User, Psswd)
//         .then((userCredential) => {
//             // Signed in
//             console.log('Ingreso satisfactoriamente')
//             const usuario = userCredential.user;
//             LogIn.reset();
//             alertRegistro('Bienvenido de vuelta ' + usuario, 'primary');
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // ..
//         });
// })

//Confirmacion Registro
var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
function alertRegistro(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible " role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
}


