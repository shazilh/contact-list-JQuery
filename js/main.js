$(document).ready(function () {
    $(".modal").modal();
});

var agregarContacto=document.getElementById("botonPublicar");
    agregarContacto.addEventListener("submit",function (e){
    e.preventDefault();
    agregarContacto.addEventListener(click,agregarTwitt);
});
//obtener datos
var nombre = document.getElementById("modal-contacto-nombre").value;
var apellido= document.getElementById("modal-contacto-apellido").value;
var telefono=document.getElementById("modal-contacto-telefono").value;
    
function agregarTwitt(){
    var areaPublicar=document.getElementById("main");
    
    //crear Twitter nuevo y sus elementos
    var nuevoContactoNombre=document.createElement("p");
    var nuevoContactoApellido=document.createElement("p");
    var nuevoTelefono=document.createElement("p");
    
    //escribir los textos
    nuevoContactoNombre.innerHTML=nombre;
    nuevoContactoApellido.innerHTML=apellido;
    nuevoContactoTelefono.innerHTML=telefono;
    
    
    
    
}

    
    


