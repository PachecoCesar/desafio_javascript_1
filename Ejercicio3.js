// Ejercicio 3
// A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por consola la
// siguiente información:
// 1. Número de enlaces de la página
// 2. Dirección a la que enlaza el penúltimo enlace
// 3. Número de enlaces que enlazan a http://prueba
// 4. Número de enlaces del tercer párrafo


//Ejercicio 3
window.onload = function() {
// Numero de enlaces de la pagina
    var links = document.getElementsByTagName('a');
    console.log(links.length);
// Direccion del penultimo enlace
    console.log(links[links.length-2].href);
// Numero de enlaces que apuntan a http://prueba
    var count = 0;
    for(i = 0; i < links.length; i++){
      if (links[i].href == "http://prueba/"){
        count++;
      }
    }
    console.log(count);
// Numero de enlaces del tercer p�rrafo
   var parf = document.getElementsByTagName('p')[2];
   var links_parf =  parf.getElementsByTagName('a');
    console.log(links_parf.length)
}
