let materias = {
        fisica:["Prof.Antonio","pedro","juan","maria","cofla"],
        programacion:["Prof.Ronaldo","pedro","juan","maria","cofla"],
        logica:["Prof.Juan","pedro","juan","cofla"],
        quimica:["Prof.Julia","juan","maria","cofla"]
}

const inscribir = (alumno, materia)=>{
    personas = materias[materia];
    personas.shift();
    alumnos = personas;
    if(alumno.length >= 20){
        document.write(`Lo siento <b>${alumno}</b>, las plazas de <b>${materia}</b> estan llenas`)
    }else{
        alumnos.push(alumno);
        if(materia == "fisica"){
            materias ={
                fisica:alumnos,
                programacion:materias['programacion'],
                logica:materias['logica'],
                quimica:materias['quimica']
            }
        }else if(materia =="programacion"){
            materias ={
                fisica:materias["fisica"],
                programacion:alumnos,
                logica:materias['logica'],
                quimica:materias['quimica']
            }
        }else if(materia =="logica"){
            materias ={
                fisica:materias["fisica"],
                programacion:materias['programacion'],
                logica: alumnos,
                quimica:materias['quimica']
            }
        }else if(materia =="quimica"){
            materias ={
                fisica:materias["fisica"],
                programacion:materias['programacion'],
                logica:materias['logica'],
                quimica:alumnos
            }
        }
        document.write(`Felicidades ${alumno} te has inscrito en ${materia}`);
    }
}
document.write(materias["fisica"]+ "<br>");
inscribir("pedrito", "fisica")
document.write("<br>" + materias["fisica"]);