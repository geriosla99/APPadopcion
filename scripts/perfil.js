function guardarPerfil() {

    let perfil = {
        nombre: document.getElementById('exampleInputName').value,
        apellido: document.getElementById('exampleInputLastName').value,
        email: document.getElementById('exampleInputEmail1').value
    }

    let nombrePerfil = document.getElementById('nombrePerfil');
    nombrePerfil.innerHTML = perfil.nombre;

    localStorage.setItem('perfil', JSON.stringify(perfil));

}
 
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });