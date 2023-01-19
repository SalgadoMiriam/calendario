console.log("Inicio de sesión calendario");

//Obtener variables: día, mes y año
let dia;
let mes;
let anio;

function obtenerDatos(dato) {
    let fecha = document.getElementById(dato).value
    return fecha;
}

//validacion de datos

//validacion dia y mes (Enero,marzo,mayo,julio,agosto,octubre,diciembre 31 días) (Febrero 28-29) (abril, junio, septiembre, noviembre 30 dias)

//Concatenación a fecha dd,mm,aaaa
function concatenarFecha(dia, mes, anio) {
    return `${mes}/${dia}/${anio}`;
}


//Evaluar día laborable o no laborable
let diaDeLaSemana;
let respuestaAlUsuario;
function evaluarTipoDeDia(diaDeLaSemana) {

    switch (diaDeLaSemana) {
        case 1:
            respuestaAlUsuario = "Lunes, día laborable.";
            break;
        case 2:
            respuestaAlUsuario = "Martes, día laborable.";
            break;
        case 3:
            respuestaAlUsuario = "Miércoles, día laborable.";
            break;
        case 4:
            respuestaAlUsuario = "Jueves, día laborable.";
            break;
        case 5:
            respuestaAlUsuario = "Viernes, día laborable.";
            break;
        case 6:
            respuestaAlUsuario = "Sábado, día no laborable.";
            break;
        case 7:
            respuestaAlUsuario = "Domingo, día no laborable.";
            break;
    }
    console.log(respuestaAlUsuario);
   

}

//Imprimir respuesta

function imprimirRespuesta(){
    document.getElementById("r").innerHTML = respuestaAlUsuario;
}


//Botón calcular
let clickBoton = document.getElementById("boton");
clickBoton.onclick = () => {
    alert("Tus datos son correctos, da click en aceptar para mostrar tu resultado");
    mes = obtenerDatos("mes");
    dia = obtenerDatos("dia");
    anio = obtenerDatos("anio");
    console.log("mes " + mes);
    console.log("dia " + dia);
    console.log("anio " + anio);
    let fechaCompleta = concatenarFecha(dia, mes, anio);
    console.log(fechaCompleta);
    fechaCompleta = new Date(concatenarFecha(dia, mes, anio));
    diaDeLaSemana = fechaCompleta.getDay();
    console.log(diaDeLaSemana);

    evaluarTipoDeDia(diaDeLaSemana);
    imprimirRespuesta();    


    

}



