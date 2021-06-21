var estadoCategoria = '';
var mascotas = {
    "gatos": [
        {
            "id": "1",
            "nombre":"Matilde",
            "raza":"British Shorthair",
            "color":"gris",
            "edad":"7 meses",
            "personalidad":"Muy cariñoso con los niños",
            "img": "./img/matilde.png"
        },
        {
            "id": "2",
            "nombre":"Pelusa",
            "raza":"Birmano",
            "color":"Plateado",
            "edad":"3 años",
            "personalidad":"Es inteligente y muy juiciosa",
            "img":"./img/pelusa.png"
        },
        {
            "id": "3",
            "nombre":"Kity",
            "raza":"Bombay",
            "color":"Blanco",
            "edad":"2años",
            "personalidad":"Muy cariñoso",
            "img":"./img/kity.png"
        },
        {   "id": "4",
            "nombre":"Bombon",
            "raza":"Gato Americano",
            "color":"Café",
            "edad": "6 meses",
            "personalidad":"Es hiperactivo y muy juguetón",
            "img":"./img/bombon.png"
        }
    ],
    "perros" : [
        {   
            "id": "5",
            "nombre":"Chester",
            "raza":"Golden Retriver",
            "color":"dorado",
            "edad":"5 meses",
            "personalidad":"Muy cariñoso con los niños",
            "img":"./img/chester.png"
        },
        {
            "id":"6",
            "nombre":"Candy",
            "raza":"Snawser",
            "color":"Plateado",
            "edad":"3 años",
            "personalidad":"Es inteligente y muy juiciosa",
            "img":"./img/candy.png"
        },
        {   
            "id":"7",
            "nombre":"Rocky",
            "raza":"Poodle",
            "color":"Blanco",
            "edad":"2años",
            "personalidad":"Muy cariñoso",
            "img":"./img/rocky.png"
        },
        {
            "id": "8",
            "nombre":"Nene",
            "raza":"Mezclado",
            "color":"Café",
            "edad": "6 meses",
            "personalidad":"Es hiperactivo y muy juguetón",
            "img":"./img/nene.png"
        }
    ]
}

function activarGatos() {

    if (estadoCategoria != 'Gatos') {
        LimpiarMascotas();

        estadoCategoria = 'Gatos'
        console.log(estadoCategoria);

        var grupoGatos = mascotas.gatos;

        console.log(grupoGatos);

        for (i = 0; i < grupoGatos.length; i++) {
            console.log(grupoGatos[i]['id']);
            div1 = document.createElement('div');
            div1.setAttribute("id", grupoGatos[i]['nombre']);
            div1.setAttribute("class", "col-5 Adopta");
            div2 = document.createElement('div');
            div2.setAttribute("class", "contenedorMascotas");
            div1.appendChild(div2);
            a = document.createElement('A');
            a.setAttribute('href', './detalles.html?id='+grupoGatos[i]['id']+'&raza=gatos');
            div2.appendChild(a);
            h3 = document.createElement('H3');
            h3.innerHTML = grupoGatos[i]['nombre'];
            a.appendChild(h3);
            p = document.createElement("P");
            p.innerHTML = grupoGatos[i]['raza'];
            div2.appendChild(p);
            document.querySelector('#espacioMascotas > div.row').appendChild(div1);
        }


    }

    console.log(estadoCategoria);
}

function activarPerros() {
    if (estadoCategoria != 'Perros') {
        LimpiarMascotas();

        estadoCategoria = 'Perros'
        console.log(estadoCategoria);

        var grupoPerros = mascotas.perros;

        console.log(grupoPerros);

        for (i = 0; i < grupoPerros.length; i++) {
            console.log(grupoPerros[i]['id']);
            div1 = document.createElement('div');
            div1.setAttribute("id", grupoPerros[i]['nombre']);
            div1.setAttribute("class", "col-5 Adopta");
            div2 = document.createElement('div');
            div2.setAttribute("class", "contenedorMascotas");
            div1.appendChild(div2);
            a = document.createElement('A');
            a.setAttribute('href', './detalles.html?id='+grupoPerros[i]['id']+'&raza=perros');
            div2.appendChild(a);
            h3 = document.createElement('H3');
            h3.innerHTML = grupoPerros[i]['nombre'];
            a.appendChild(h3);
            p = document.createElement("P");
            p.innerHTML = grupoPerros[i]['raza'];
            div2.appendChild(p);
            document.querySelector('#espacioMascotas > div.row').appendChild(div1);
        }
    }
 

    console.log(estadoCategoria);

}

function LimpiarMascotas(){
    var div = document.querySelector('#espacioMascotas > div.row');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}

function mostrarDetallesMascotas(){
    const queryString = window.location.search;
    //console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    const raza = urlParams.get('raza');
    var grupoMascotas = mascotas[raza];
    //console.log(grupoMascotas);
    for (i = 0; i < grupoMascotas.length; i++) {
        if(grupoMascotas[i]['id'] == id){
            console.log(grupoMascotas[i])
            document.getElementById('imagenMascota').setAttribute('src', grupoMascotas[i]['img']);
            document.getElementById('nombreMascota').innerHTML = grupoMascotas[i]["nombre"];
            document.getElementById('razaMascota').innerHTML = grupoMascotas[i]["raza"];
            document.getElementById('edadMascota').innerHTML = grupoMascotas[i]["edad"];
            document.getElementById('personalidadMascota').innerHTML = grupoMascotas[i]["personalidad"];
        }
    }

}

function añadirFavoritos() {
    var nombre = document.getElementById('nombreMascota').innerHTML;
    var raza = document.getElementById('razaMascota').innerHTML;
    var img = document.getElementById('imagenMascota').src;

    const mascota = {
        nombre : nombre,
        raza : raza,
        img : img
    }
    // console.log(mascota);
    localStorage.setItem('mascotas',JSON.stringify(mascota));
    //console.log(localStorage);
    
    console.log("añadido a favorito");

}

function favoritos() {
    var datos = '';
    console.log('estoy en favoritos');
    var favoritos = JSON.parse(localStorage.getItem('mascotas'));
    console.log(favoritos);

    const row = document.createElement('div');
    row.innerHTML +=`
    <div class="row container categoria-mascotas">
        <div class="col-5 Adopta">
            <div class="contenedorMascotas">
                <img src="${favoritos.img}" id="${favoritos.nombre}" class="mascotaFav" alt="">
                <h3 id="nombreMascota" >${favoritos.nombre}</h3>
                <p id="razaMascota">${favoritos.raza}</p>
            </div>
        </div>
    </div>
    `
    console.log(row);

    const espacioFavoritos = document.querySelector('.container');

    espacioFavoritos.appendChild(row);

}


