

function datos() 
{

    //Variables para notas
    let nombre = prompt("¡Hola! ¿Cuál es tu nombre?");
    let materia = prompt("Ingrese el nombre de la materia a calcular");
    let nota1;
    let nota2;
    let nota3;
    let promedio;



    ///verificar notas en el rango
    //nota # 1

    while(true)
    {
        nota1=parseFloat(prompt("Ingrese la primera nota de (0-10):"));
        if(!isNaN(nota1) && nota1>=0 && nota1<=10){ break;}
        else{ alert("Ingrese la primera nota nuevamente")}

    }

     //nota # 2

     while(true)
     {
         nota2=parseFloat(prompt("Ingrese la segunda nota de (0-10):"));
         if(!isNaN(nota2) && nota2>=0 && nota2<=10){ break;}
         else{ alert("Ingrese la segunda nota nuevamente")}
 
     }

      //nota # 3

    while(true)
    {
        nota3=parseFloat(prompt("Ingrese la tercera nota de (0-10):"));
        if(!isNaN(nota3) && nota3>=0 && nota3<=10){ break;}
        else{ alert("Ingrese la tercera nota nuevamente")}

    }





/// Promedio de las notas
    promedio= (nota1+nota2+nota3) / 3;


    //Enviar mensaje

    if(promedio>=7)
    {        
    var mensaje = "¡Hola, " + nombre + ", FELICIDADES, has aprobado la materia de:  " + materia + "  con un promedio:   " + promedio + " puntos.";
    document.getElementById("mensaje").textContent = mensaje;

    }
    else{
        var mensaje = "¡Hola, " + nombre + ", Gracias por tu esfuerzo en la materia de:  " + materia + " tuviste un promedio:   " + promedio + " puntos, nos vemos en clase.";
        document.getElementById("mensaje").textContent = mensaje;
        
    }

}