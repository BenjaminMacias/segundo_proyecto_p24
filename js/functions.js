document.addEventListener("DOMContentLoaded", () => { //se asegura que el código dentro solo se ejecute después de que todo el HTML se cargue en el navegador.
    const searchInput = document.getElementById("searchInput");  //identificar input de busqueda
    const searchButton = document.getElementById("searchButton");  //identificar boton de busqueda
    const resultsContainer = document.getElementById("results");  //identificar contenedor del resultados


    searchButton.addEventListener("click", async () => { //al hacer click en el boton de busqueda asincronica para solicitar una api
        const query = searchInput.value.trim();  // elimina los espacios en blanco al inicio y al final.
        if (!query) return;   //Si query está vacío, la función se detiene.
        resultsContainer.innerHTML = "Cargando..."; //Mensaje de búsqueda está en proceso mientras carga datos.
        try {
            const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);  //solicitud HTTP GET a la API de TVMaze, en base a la consulta alacenada en (query) el input. await espera que se complete antes de continuar.
            displayResults(response.data);  //obtiene resultados.
        } catch (error) {
            console.error("Error al obtener datos:", error);  //muestra un mensaje de error 
        }
    });

    function displayResults(shows) {   //definir función displayResults(shows),lista obtenida de la API
        resultsContainer.innerHTML = "";   //eliminar resultado anterior.
        if (shows.length === 0) {   //Si la API esta vacía 
            resultsContainer.innerHTML = "<p>No se encontraron resultados</p>";
            return;
        }

        shows.forEach(show => {  //obtener el listado en objetos por elemento
            const { id, name, image, summary } = show.show;  // desestructura las propiedades del objeto para acceder directamente desde el objeto que contiene la información principal de la serie o película.
            const card = document.createElement("div");  //Se crea un div para cada elemento show.
            card.classList.add("card");  //Se le agrega la clase "show-card" 

            card.innerHTML = `
                <h3>${name}</h3>
                <img src="${image ? image.medium : 'https://via.placeholder.com/150'}" alt="${name}">
                <p>${summary ? summary.replace(/<[^>]*>?/gm, '') : "No hay descripción disponible."}</p>
                <button onclick="loadDetails(${id})">Ver detalles</button>
            `;
            resultsContainer.appendChild(card);
        });
    }
});

// Función para obtener los detalles de una serie usando el segundo endpoint
async function loadDetails(id) {  //identificador unico de la serie
    try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        const show = response.data;  //se guarda la respuesta en la variable show.

        // Guardamos los detalles en el almacenamiento local y redirigimos
        localStorage.setItem("showDetails", JSON.stringify(show));    //guarda información en el navegador y convierte el objeto show en un string JSON para poder guardarlo.
        window.location.href = "details.html";   //Redirige al usuario a la página details.html donde se mostrarán los detalles guardados en localStorage.
    } catch (error) {
        console.error("Error al obtener detalles:", error);
    }
}
