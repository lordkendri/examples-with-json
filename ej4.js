const obtenerInformacion = (materia) =>{
    materias = {
        fisica:["Prof.Antonio","pedro","juan","maria","cofla"],
        programacion:["Prof.Ronaldo","pedro","juan","maria","cofla"],
        logica:["Prof.Juan","pedro","juan","cofla"],
        quimica:["Prof.Julia","juan","maria","cofla"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia], materia, materias];
    } else{
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
if (informacion != false){
    let profesor = obtenerInformacion(materia)[0][0];
    let alumnos = obtenerInformacion(materia)[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
    Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>`
    );
}
}

const cantidadDeClases =(alumno)=>{
    informacion = obtenerInformacion();
    clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `${alumno} esta en <b>${cantidadTotal} clases: </b> <b style="color:green">${clasesPresentes} cursos</b>`;
}
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("pedro"));
