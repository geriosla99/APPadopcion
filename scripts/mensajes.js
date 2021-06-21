var nombreUsuario = document.querySelector('.nombreUsuario').innerHTML;
var imgUsuario = document.querySelector('.imgBuzon').src;
var contenedorUsuario = document.querySelector('.chatUsuario');
var mensaje = document.querySelector('.mensajes');
var botonMensaje = document.querySelector('.botonMensaje');

function entrarChat() {
    
    const usuario = {
        nombreUsuario : nombreUsuario,
        imgUsuario : imgUsuario
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    console.log(localStorage);
};
function chat() {
    
    JSON.parse(localStorage.getItem('usuario'));
    console.log(localStorage);

    

}