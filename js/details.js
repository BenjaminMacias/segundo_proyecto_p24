// js/details.js
document.addEventListener("DOMContentLoaded", () => {
    const detailsContainer = document.getElementById("details-container");

    // Recuperar detalles desde el almacenamiento local
    const showDetails = JSON.parse(localStorage.getItem("showDetails"));

    if (!showDetails) {
        detailsContainer.innerHTML = "<p>Error al cargar los detalles.</p>";
        return;
    }

    const { name, image, summary, genres, premiered, rating, officialSite } = showDetails;

    detailsContainer.innerHTML = `
        <h2>${name}</h2>
        <img id ="imagen" src="${image ? image.original : 'https://via.placeholder.com/300'}" alt="${name}">
        <p><strong>Géneros:</strong> ${genres.join(", ")}</p>
        <p><strong>Fecha de estreno:</strong> ${premiered || "No disponible"}</p>
        <p><strong>Calificación:</strong> ${rating?.average || "No disponible"}</p>
        <p>${summary}</p>
        ${officialSite ? `<a href="${officialSite}" target="_blank">Visitar sitio oficial</a>` : ""}
    `;
});
