// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaración de la variable de tipo array, que almacenará los nombres de los amigos ingresados
let amigos = [];

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo (){
    //Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    //Si el campo está vacío, se muestra el mensaje:
    if (nombre === ""){
    alert("por favor, inserte un nombre.");
    return;
    }
    //Si el nomre es válido, se añade al array
    amigos.push(nombre);

    //Llamamos a la función para actualizar la lista en pantalla
    actualizarListaAmigos();

    //limpiar el campo de entrada
    input.value = ""
}

function actualizarListaAmigos(){
    //Obtener el elemento de la lista del html
    const lista = document.getElementById("listaAmigos");
    //Limpiar la lista existente para evitar los duplicados
    lista.innerHTML= "";
    //Recorrer el arreglo de amigos con un bucle for
    for (let i = 0; i < amigos.length; i++){
        const nombre = amigos[i];
    //Crea un elemento <li> para cada nombre
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
    //Agrega el <li> a la lista HTML
        lista.appendChild(nuevoElemento);
    }
}

//Implementa una función para sortear los nombres
function sortearAmigo(){
    //Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos que sortear. Agrega al menos un nombre");
        return;
    }
    //Genéra un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);

    //Obtén el nombre sorteado
    const nombreSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${nombreSorteado}</li>`;
}

//looo
