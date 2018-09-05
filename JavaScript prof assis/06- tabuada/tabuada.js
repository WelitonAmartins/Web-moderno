/**
 * JS Aula de tabuada
 */

 var valor = 7;

 for(var i =1; i < 11; i++){
     document.write("<h1>"+"Tabuada do " + i +"</h1>");
    // document.write(valor+ " x " + i + " = " + (valor*i)+  "<br>");
    for(var j = 1; j < 11; j++){
        document.write(i + " x " + j + " = "+ ( i*j)+"<br>" );
    }
 }