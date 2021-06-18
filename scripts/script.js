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
    console.log(favoritos);
}

function mascotaFavorito() {
     console.log("mascota en pagina");
    // var datos = [];

}

// function getLocalStorageJSON(){
//     let datosTemp = [];
//     let datosMascota = [];
//     let arreglosDatosMascota = [];
//     for(i=0; i<localStorage.length;i++){
//         datosMascota = JSON.parse(localStorage.getItem(key(i)));
//         arreglosDatosMascota = datosMascota.
//     }
// }
