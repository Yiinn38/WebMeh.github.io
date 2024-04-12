    let formulario = document.getElementById('formulario');
    let nombre = document.getElementById('nombre');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descripcion');

    let tareas = [];
    let btnGuardar = document.getElementById('btnGuardar');


    let agregarDatos = function() {
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value
        };
        tareas.push(datos);
        console.log(tareas);
    }

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        agregarDatos();
    });

