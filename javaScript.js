//INFORMACION PERSONAL
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

//Box de ACERCA DE
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


//FORMACION ACADEMICA
function agregarAlgo(){
    let contenedorExp = document.getElementById("contenedor-exp");
    contenedorExp.insertAdjacentHTML(`beforeend`,`
    <div class="card">
            <div class="card-body">
                <button class="btn btn-success" onclick="editarEducacion()">Editar</button>
                <button id="guardarEscuela" class="btn btn-primary disabled" onclick="guardarEducacion()">Guardar</button>
                <div>
                    <input type="text" id="institucion" placeholder="Institucion" disabled>
                    <input type="text" id="anio" placeholder="Año de finalizacion" disabled>
                </div>
            </div>
        </div>
    `)
}
function editarEducacion(){
    let institucion = document.getElementById("institucion");
    let guardarEscuela = document.getElementById("guardarEscuela");
    let anio = document.getElementById("anio");
    institucion.disabled = false;
    guardarEscuela.classList.remove("disabled");
    anio.disabled = false;
}
function guardarEducacion(){
    let guardarEscuela = document.getElementById("guardarEscuela");
    let institucion = document.getElementById("institucion");
    let anio = document.getElementById("anio");
    guardarEscuela.classList.add("disabled");
    institucion.disabled = true;
    anio.disabled = true;
}
function esconder(){
    let botonOculto = document.getElementById("botonOculto");
    let imagenEditar = document.getElementById("editar");
    botonOculto.hidden = true;
    imagenEditar.hidden = true;
}

//EXPERICNECIA LABORAL
function esconder2(){
    let boton2 = document.getElementById("boton2");
    boton2.hidden= true;
}
function agregarOtraCosa(){
    let contenedorAcademia = document.getElementById("contenedor-academia");
    contenedorAcademia.insertAdjacentHTML(`beforeend`,`
    <div class="card">
            <div class="card-body">
                <button class="btn btn-success" onclick="editarExperincia()">Editar</button>
                <button id="guardarExperiencia" class="btn btn-primary disabled" onclick="guardarExperiencia()">Guardar</button>
                <div>
                    <input type="text" id="lugarTrabajo" placeholder="Lugar de trabajo" disabled>
                    <input type="text" id="tiempo" placeholder="Año de finalizacion" disabled>
                </div>
            </div>
        </div>
    `)
}
function editarExperincia(){
    let lugarTrabajo = document.getElementById("lugarTrabajo");
    let guardarExperiencia = document.getElementById("guardarExperiencia");
    let tiempo = document.getElementById("tiempo");
    lugarTrabajo.disabled = false;
    guardarExperiencia.classList.remove("disabled");
    tiempo.disabled = false;
}
function guardarExperiencia(){
    let guardarExperiencia = document.getElementById("guardarExperiencia");
    let lugarTrabajo = document.getElementById("lugarTrabajo");
    let tiempo = document.getElementById("tiempo");
    guardarExperiencia.classList.add("disabled");
    lugarTrabajo.disabled = true;
    tiempo.disabled = true;
}