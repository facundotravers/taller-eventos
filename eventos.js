const boton = document.querySelector('button');
const divContenedor = document.querySelector('.boton-container');

function mostrarSaludo() {
    alert('¡Hola desde el botón!');
}

boton.addEventListener('click', function (event) {
    event.stopPropagation();
    mostrarSaludo();
});

divContenedor.addEventListener('click', function () {
    alert('Hola! Soy el div');
});