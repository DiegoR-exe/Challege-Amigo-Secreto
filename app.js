// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
function agregarAmigo() {
    //Capturar el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); //limpia espacios en blanco

    //Validar que no este vacio 
    if (nombre ==="") {
        alert("Por favor, inserte un nombre valido.");
        return;
    }

    //Agregar nombre de un amigo
    amigos.push(nombre);

    //Actualizar la lista en la pantalla
    mostrarLista();

    //Limpiar el campo de entrada
    input.value="";

}

function mostrarLista() {
    // Obtener el elemento <ul> donde se mostraran los amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiar la lista

    //Recorrer el array amigos con un bucle for
    for(let i=0; i< amigos.length; i++){
        //crear nun nuevo elemento <li> por cada amigo
        let li = document.createElement("li");
        li.textContent=amigos[i];

        //agregar al <li> a la lista
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    //Validar lista de amigos
    if(amigos.length===0){
        alert("No hay amigos para sortear. Por favor, agregue al menos un nombre.");
        return;
    }
    //Generar un indice aleatorio
    let  indiceAleatorio = Math.floor(Math.random()*amigos.length);
    //Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    //Mostrar el resultado 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML= `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}