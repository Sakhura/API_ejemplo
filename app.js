// Version usando .then() y .catch()

function obtenerUsuariosConThen(){
    //limpiar el contenedor antes de cargar
    document.getElementById("contenedor").innerHTML = "Cargando...";
    document.getElementById("mensaje-error").textContent = "";

    fetch("https://jsonplaceholder.typicode.com/users") //1. hacemos la peticion
        .then(function(respuesta){                      //2. recibimos la respuesta
            if(!respuesta.ok){
                throw new Error("Error en la petición: " + respuesta.status);
            }
            return respuesta.json();                    //3.convertimos a json
        })
        .then(function(usuarios){                       //4. ya tenemos los datos
            mostrarUsuarios(usuarios);                  //5. mostramos los usuarios
        })
        .catch(function(error){                         //6. capturamos cualquier error
            document.getElementById("mensaje-error").textContent = "✗ " + error.message;
        });
}

// fx que construya las tarjetas en el DOM

function mostrarUsuarios(usuarios){
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    usuarios.forEach(function(usuario){
        //se creara una tarjeta por usuario
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${usuario.name}</h3>
            <p> Email: ${usuario.email} </p>
            <p> Ciudad: ${usuario.address.city} </p>
            <p> Web: ${usuario.website} </p>
        `;
        contenedor.appendChild(card);
    });
}

// Version async/await

async function obtenerUsuariosConAsync() {
    document.getElementById("contenedor").innerHTML = "Cargando ...";
    document.getElementById("mensaje-error").textContent = "";

    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!respuesta.ok){
            throw new Error("Error en la petición: " + respuesta.status);
        }

        const usuarios = await respuesta.json();
        mostrarUsuarios(usuarios);
    } catch (error) {
        document.getElementById("mensaje-error").textContent = "✗ " + error.message;
    }
}