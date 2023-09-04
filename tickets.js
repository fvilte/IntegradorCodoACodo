let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");
let pagoTotal = document.getElementById("pagoTotal");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let frm = document.getElementById("frm");

let descEstudiante = 80;
let descTrainee = 50;
let descJunior = 15;
let valorTicket = 200;

function total_a_pagar(){
    if(nombre.value === ""){
        alert("Debes escribir tu nombre.");
        return
    }

    if(apellido.value === ""){
        alert("Debes escribir tu apellido.");
        return
    }

    if(email.value === ""){
        alert("Debes escribir tu correo");
        return
    }

    const emailValido = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (!emailValido(email.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        return;
    }

    if ((cantidadTickets.value == 0) || (isNaN(cantidadTickets.value))) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        return;
    }

    if (categoria.value === "") {
        alert("Por favor, seleccioná una categoría.");
        return;
    }

//VARIABLE CANTIDAD TICKETS POR VALOR

let valorTotalTickets = (cantidadTickets.value) * valorTicket;

//DESCUENTOS SEGUN CATEGORIA

    if(categoria.value==1){
        valorTotalTickets=valorTotalTickets;
    }

    if(categoria.value==2){
        valorTotalTickets= valorTotalTickets - (descEstudiante/100 * valorTotalTickets);
    }

    if(categoria.value==3){
        valorTotalTickets= valorTotalTickets - (descTrainee/100 * valorTotalTickets);
    }

    if(categoria.value==4){
        valorTotalTickets= valorTotalTickets - (descJunior/100 * valorTotalTickets);
    }

    pagoTotal.innerHTML=valorTotalTickets;

}

function borrar(){
    document.getElementById("frm").reset();
}

btn1.addEventListener('click',total_a_pagar);
btn2.addEventListener('click',borrar);