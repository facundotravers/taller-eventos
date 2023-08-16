document.addEventListener('DOMContentLoaded', function () {
    const divContenedor = document.querySelector('.boton-container');

    divContenedor.addEventListener('click', function () {
        alert('Hola! Soy el div');
    });
});