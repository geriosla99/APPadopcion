export default class perfil {

    constructor() {

        this.perfil = JSON.parse(localStorage.getItem('perfil'));
        if (this.perfil === {}) {
            this.perfil = {};
        }

        this.name = document.getElementById('exampleInputName').value;
        this.lastName = document.getElementById('exampleInputLastName').value;
        this.email = document.getElementById('exampleInputEmail1').value;
        this.imagen = document.getElementById('perfil').value;
        this.nombrePerfil = document.getElementById('nombrePerfil').value;
        this.inputImagen = document.getElementById('seleccionArchivos').value;

    }

    generarPerfil() {

        if (Object.keys(this.perfil).length) {

            this.name.value = this.perfil.name;
            this.lastName.value = this.perfil.lastName;
            this.email.value = this.perfil.email;
            this.nombrePerfil.value = this.perfil.nombrePerfil;

            if (this.perfil.imagen) {
                this.imagen.src = this.perfil.imagen
            }

        }

    }

    guardarPerfil() {

        this.name.value = this.perfil.name;
        this.lastName.value = this.perfil.lastName;
        this.email.value = this.perfil.email;

        localStorage.setItem('perfil',JSON.stringify(this.perfil));

        this.generarPerfil();

    }

    // crearPerfil() {
    //     if(Object.keys(this.perfil).length >= 1){
    //         this.name.value = this.perfil.name;                    
    //         this.lastName.value = this.perfil.lastName;                    
    //         this.email.value = this.perfil.email;                
    //         this.nombrePerfil.value = this.perfil.nombrePerfil

    //         if(this.perfil.imagen){
    //             this.imagen.src = this.perfil.imagen
    //         }
    //     }
    // }

};
// function perfil() {

//     localStorage.setItem('datosPersona', JSON.stringify({datosPersona}));
// }


