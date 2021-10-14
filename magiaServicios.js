/*
Se va a hacer del modo viejo pero que funciona, es el modo que presento
el profesor carlos
*/
//Llave unica para conectarse al proyecto en firebase
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

const fireApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(fireApp);
const proveedor = new firebase.auth.GoogleAuthProvider();
const database = firebase.firestore();
let usuarioActual;
let listaServicios = [];

//Variables del DOM
const btnLogin = document.getElementById('btn-login');
const btnLogOut = document.getElementById('btn-logout');
const btnRegistro = document.getElementById('btn-registro');
const serviciosActuales = document.getElementById('listaServiciosActuales');
const serviciosEliminables = document.getElementById('listaEliminarServicio');
const anadirServicioTitulo = document.getElementById('anadirNuevoServicio');
const anadirServicioDescripcion = document.getElementById('descripcionNuevoServicio');
const anadirServicio = document.getElementById('btn-anadir');
const btnEliminar = document.getElementById('btn-eliminar');
const formEliminar = document.getElementById('form-seleccion');
const imgProfile = document.getElementById('foto-perfil');
const pieImg = document.getElementById('caption-foto');
const btnModPerfil = document.getElementById('edicion-perfil');
const btnActPerfil = document.getElementById('guardarCambios');
const btnCancelarActPerfil = document.getElementById('cancelarCambios');
const formServicios = document.getElementById('segunda-columna');
var githubInfo = document.getElementById('modificarGithub');
var telefonoInfo = document.getElementById('modificarTelefono');
var ubicacionInfo = document.getElementById('modificarUbicacion');
var idDatosUsuario;

//observador();



//Funciones
//Configura los objetos que se muestran, carga los servicios que pertenencen al correo del usuario que ingresa
async function login() {
    try {
        const respuesta = await auth.signInWithPopup(proveedor)
        //console.log(respuesta.user.displayName);
        usuarioActual = respuesta.user;
        //console.log(usuarioActual.displayName);

        listaServicios = await leerServicios(usuarioActual.email);
        imgProfile.classList.remove('visually-hidden');
        pieImg.innerText = usuarioActual.displayName;
        imgProfile.src = '' ? "https://www.seekpng.com/png/full/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png" : usuarioActual.photoURL; //
        btnModPerfil.classList.remove('visually-hidden');
        formServicios.classList.remove('visually-hidden');
        //console.log("Esta es la lista de servicios: -->" + listaServicios);
        pintarServiciosActuales(listaServicios);
        pintarServiciosActualesBorrar(listaServicios);
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}
//Esta funcion permite cerrar sesion
function logOut() {
    auth.signOut();
}


//Esta es la funcion que se encarga de hacerr la lectura de los servicios de cada usuario
async function leerServicios(usuario) {//<---Como argumento se puede meter el correo del usuario actual para que cargue solo la info del fulano
    let servicios = [];
    const resumenS = await database.collection('servicios-usuarios').where("user", "==", usuario).get();
    // .then((uuu) => {
    //     uuu.forEach((doc) => {
    //         //console.log(doc.id, "==>", doc.data());
    //         servicios.push(doc.data().nombreServicio);
    //     })

    // }).catch((error) => {
    //     console.log("Error getting document:", error);
    // });

    resumenS.forEach((doc) => {
        //console.log(doc.id, "==>", doc.data());
        servicios.push(doc.data().nombreServicio);


    })

    return servicios;
}
//Esta funcion se encarga de "imprimir" los valores de HTML que muestran los servicios actuales del usuario
function pintarServiciosActuales(servicios) {
    let contenidoHtml = "";
    servicios.forEach((t) => {
        contenidoHtml += `
        <li class="list-group-item" id="${t}">
        ${t}</li>
        `
        //<input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    });
    serviciosActuales.innerHTML = contenidoHtml
}



//"imprime" el listado de los servicios que se pueden eliminar
function pintarServiciosActualesBorrar(servicios) {
    let contenidoHtml = "";
    servicios.forEach((t) => {
        contenidoHtml += `
        <option value="${t}" id="${t}">${t}</option>
        `
    });
    serviciosEliminables.innerHTML = contenidoHtml
}

//Prepara variables para infor del usuario
async function agregarDatos(telefono, github, ubicacion, usuario) {
    const datos = {
        id: uuid.v4(),
        Telefono: telefono,
        Github: github,
        Ubicacion: ubicacion,
        user: usuario
    }
    const resultado = await actualizarDatosUsuario(datos)
    //console.log(resultado);
}

//Esta funcion hace la de guardar los datos de usuario en la lista correspondiente
async function actualizarDatosUsuario(task) {
    try {
        const respuesta = await database.collection('datos-usuarios').doc(idDatosUsuario).update(task)
        //doc(id).
        return respuesta
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

//Prepara las variables que se van a  guardar en el documento
async function agregarServicio(nServicio, descrip) {
    const datos = {
        id: uuid.v4(),
        estado: true,
        nombreServicio: nServicio,
        user: usuarioActual.email,
        descripcion: descrip
    }
    const resultado = await guardarServicio(nServicio, datos)
    //console.log(resultado);
    //listaServicios = await leerServicios()
    //pintar<-----
}
//Esta funcion hace el registro del documento en firestore
async function guardarServicio(id, task) {
    try {
        const respuesta = await database.collection('servicios-usuarios').doc(id).set(task)
        return respuesta
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}
//Cada vez que esta es llamada obliga a hacer una actualizacion de los servicios
async function actualizarDatos() {

    let service = await leerServicios(usuarioActual.email)
    pintarServiciosActuales(service);
    pintarServiciosActualesBorrar(service);

}
//Cada vez que esta es llamada obliga a hacer una actualizacion de los servicios
function actualizarDatosBorrado(aBorrar) {// <--Aca toca meter el nombre del servicio a borrar
    let pedazoHTML = document.getElementById(aBorrar);
    serviciosActuales.removeChild(pedazoHTML);
    serviciosEliminables.removeChild(pedazoHTML);
}
//Hace la operacion de eliminar un servicio u documento que hace referencia al servicio
async function eliminarServicio(servicioEliminar) {
    // let ss = [];
    // let comparacion;
    // database.collection('servicios-usuarios').onSnapshot((query) => {
    //     query.forEach((doc) => {
    //         console.log(`${doc.id} ===>>> ${doc.data().nombreServicio}`);
    //         ss.push([doc.id, doc.data()]);

    //     })
    //     console.log('----------');
    //     //ss[0][0] --> es el ID
    //     //ss[0][1].nombreServicio --> es el nombre del servicio
    // })
    // console.log('Eliminados: ');
    await database.collection('servicios-usuarios').doc(servicioEliminar).delete()
    console.log('Se ha eliminado -> ' + servicioEliminar);
    actualizarDatosBorrado(servicioEliminar);


}


//Funcion extractora datos
function extraccion(doc){
    // Expresion ? val1 : val2 <-- Si es true devuelve el val1
    telefonoInfo.value = '' ? '':doc.data().Telefono;//<---- ASi se usan los ternarios
    githubInfo.value = '' ? '' : doc.data().Github;
    ubicacionInfo.value = '' ? '' : doc.data().Ubicacion;
    idDatosUsuario = doc.id;
    //console.log(doc.id);


}
//Esta funcion trae los valores del documento donde se almacena informacion del usuario
//-->> Es MUUUUy Importante aclarar que es mas facil extraer la informacion por medio de una funcion!!!!!!!!!!
function leerDatosUsuario(usuario) {
    //var datos;
    database.collection('datos-usuarios').where("user", "==", usuario).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                //datos = doc.data();
                //console.log(datos);
                extraccion(doc);
            });

        })

}

async function observador() {
    listaServicios = await leerServicios('corredor.jose@fuac.edu.co');
    firebase.auth().onAuthStateChanged((user) => {

        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            console.log('Se ha ingresado con usuario: ' + user.displayName);
            console.log(user.email);

            imgProfile.classList.remove('visually-hidden');
            pieImg.innerText = user.displayName;
            imgProfile.src = user.photoURL;
            btnModPerfil.classList.remove('visually-hidden');
            formServicios.classList.remove('visually-hidden');
            //pintarServiciosActuales(listaServicios);
            //pintarServiciosActualesBorrar(listaServicios);
            btnRegistro.classList.add('visually-hidden')
            btnLogOut.classList.remove('visually-hidden')
            console.log(listaServicios);
            // ...
        } else {
            // User is signed out
            // ...
            console.log('no hay usuario...');
        }
    });
}

//Eventos
//Boton Login
btnLogin.addEventListener('click', (e) => {
    login()



})
//Boton LogOut
btnLogOut.addEventListener('click', () => {
    logOut()

})
//Boton anadir
anadirServicio.addEventListener('click', (e) => {
    let titulo = anadirServicioTitulo.value;
    let descripcion = anadirServicioDescripcion.value;
    e.preventDefault();
    //console.log(titulo + "-->" + descripcion);
    if (titulo != "") {
        agregarServicio(titulo, descripcion)

    }
    actualizarDatos();
    anadirServicioTitulo.value = '';
    anadirServicioDescripcion.value = '';

})


//Boton Eliminar
btnEliminar.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(serviciosEliminables.value);
    eliminarServicio(serviciosEliminables.value)
    actualizarDatos();
})

//Boton Ed. perfil
btnModPerfil.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('formActualizacionDatos').classList.remove('visually-hidden');
    console.log(usuarioActual.email);
    let ss = leerDatosUsuario(usuarioActual.email);
    console.log(ss);
    //pintarDatosUsuario(ss);
})
//Boton actualizar perfil
btnActPerfil.addEventListener('click', (e) => {
    e.preventDefault();
    let datos = leerDatosUsuario(usuarioActual.email);
    //console.log(datos);
    agregarDatos(telefonoInfo.value, githubInfo.value, ubicacionInfo.value, usuarioActual.email);
    //console.log('revisa el firebase');
    document.getElementById('formActualizacionDatos').classList.add('visually-hidden');
    telefonoInfo.value = '';
    githubInfo.value = '';
    ubicacionInfo.value = '';



})
//Boton cancelar Act. perfil
btnCancelarActPerfil.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('formActualizacionDatos').classList.add('visually-hidden');
    telefonoInfo.value = '';
    githubInfo.value = '';
    ubicacionInfo.value = '';
})
