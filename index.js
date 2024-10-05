// Variables del area de texto y del boton de enviar 
const boton = document.getElementById("boton");
const areaTexto = document.getElementById("areaTexto");

// Funcion que envie el mensaje
function enviarMensaje(){
    if(areaTexto.value.trim() === "" ){
        alertaComentarioVacio();
    } else { 
        alertaComentarioEnviado();
        areaTexto.value ="";
        document.getElementById("mensajeAlerta").style.display = "none";
    }
};

// Funcion para cuando el usario envie un comentario valido se muestre un mensaje de agradecimiento
function alertaComentarioEnviado(){
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
    mensajeConfirmacion.textContent="¡Agradecemos tu comentario! Cada opinión cuenta y nos ayuda a mejorar.";
    mensajeConfirmacion.style.display = "block";
}

// Funcion para cuando el usario envie un comentario que NO es valido se muestre una alerta
function alertaComentarioVacio() {
    const mensajeAlerta = document.getElementById ("mensajeAlerta");
    mensajeAlerta.textContent ="¡Espera! Asegúrate de que tu comentario no esté vacío.";
    mensajeAlerta.style.display = "block"; 
}

boton.addEventListener("click",enviarMensaje)
