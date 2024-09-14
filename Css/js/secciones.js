// Evento que se ejecuta cada vez que el usuario hace scroll en la página
window.onscroll = function() {
    // Selecciona todas las secciones con la clase "section"
    var sections = document.querySelectorAll(".section");

    // Selecciona todos los enlaces dentro de la barra de navegación
    var navLinks = document.querySelectorAll(".navbar a");

    // Recorre cada sección
    sections.forEach(function(section, index) {
        // Obtiene las dimensiones y la posición de la sección en relación con la ventana de visualización
        var rect = section.getBoundingClientRect();

        // Si la parte superior de la sección está dentro de la ventana de visualización
        // y la parte inferior de la sección está por debajo de la parte superior de la ventana
        if (rect.top <= 60 && rect.bottom > 60) {
            // Elimina la clase "active" de todas las secciones para ocultarlas
            sections.forEach(sec => sec.classList.remove("active"));

            // Elimina la clase "active" de todos los enlaces de navegación
            navLinks.forEach(link => link.classList.remove("active"));

            // Añade la clase "active" a la sección actual, haciendo que sea visible
            section.classList.add("active");

            // Añade la clase "active" al enlace correspondiente a la sección actual
            navLinks[index].classList.add("active");
        }
    });
};

// Evento que se ejecuta cuando el DOM (Document Object Model) ha sido completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Muestra la primera sección al cargar la página añadiendo la clase "active" a la primera sección
    document.querySelector(".section").classList.add("active");
});
