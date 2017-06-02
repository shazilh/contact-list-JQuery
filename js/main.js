$(document).ready(function () {
    $(".modal").modal();
});

var agregarContacto=document.getElementById("botonPublicar");   agregarContacto.addEventListener("click",agregarNuevoContacto);


function agregarNuevoContacto(e){
    e.preventDefault();
    var contenedorPublicaciones=document.getElementById("main");
    
    var nombre = document.getElementById("modal-contacto-nombre").value;
    var apellido= document.getElementById("modal-contacto-apellido").value;
    var telefono=document.getElementById("modal-contacto-telefono").value;
    
    //crear Twitter nuevo y sus elementos
    var areaPublicarContacto=document.createElement("div");
    var nuevoContactoNombre=document.createElement("p");
    var nuevoContactoApellido=document.createElement("p");
    var nuevoTelefono=document.createElement("p");
    
    nuevoContactoNombre.textContent=nombre;
    nuevoContactoApellido.textContent=apellido;
    nuevoTelefono.textContent=telefono;
    
    areaPublicarContacto.appendChild(nuevoContactoNombre);
    areaPublicarContacto.appendChild(nuevoContactoApellido);
    areaPublicarContacto.appendChild(nuevoTelefono);
    
    contenedorPublicaciones.appendChild(areaPublicarContacto);
    
    
    
}

    
    


