function evento (){
    let botonGuardar = document.getElementById("botonGuardar");
    let situacionLaboral = document.getElementById("situacionLaboral");
    let localidad = document.getElementById("localidad");
    let inputNombre = document.getElementById("nombreCompleto");
    botonGuardar.classList.remove("disabled");
    inputNombre.disabled = false;
    situacionLaboral.disabled = false;
    localidad.disabled = false;
}
function guardar(){
    let botonGuardar = document.getElementById("botonGuardar");
    let situacionLaboral = document.getElementById("situacionLaboral");
    let localidad = document.getElementById("localidad");
    let inputNombre = document.getElementById("nombreCompleto");
    botonGuardar.classList.add("disabled");
    inputNombre.disabled = true;
    situacionLaboral.disabled = true;
    localidad.disabled = true;
}

function editarDescripcion(){
    let informacion = document.getElementById("informacion");
    let guardarDescripcion = document.getElementById("descripcion");
    informacion.disabled = false;
    guardarDescripcion.classList.remove("disabled");
}
function guardarDescripcion(){
    let informacion = document.getElementById("informacion");
    let guardarDescripcion = document.getElementById("descripcion");
    informacion.disabled = true;
    guardarDescripcion.classList.add("disabled");
}