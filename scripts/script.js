function favoritos() {
    var nombre = document.getElementsByClassName('nombre')[0].textContent;
    var raza = document.getElementsByClassName('raza')[0].textContent;
    var img = document.getElementsByClassName('mascota')[0].src;

    const mascota = {
        nombre : nombre,
        raza : raza,
        img : img
    }
    // console.log(mascota);
    localStorage.setItem('mascotas',JSON.stringify(mascota));
    //console.log(localStorage);
    var favoritos = JSON.parse(localStorage.getItem('mascotas'));
    alert('Tu mascota se a añadido a favoritos');
}

function mascota() {
    var datos = [];
    console.log("mascota en pagina");


}

