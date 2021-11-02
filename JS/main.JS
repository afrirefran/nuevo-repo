/* CAR SHOPPING */
function drag(parrafo, evento) {
    evento.dataTransfer.setData('Text', parrafo.id);
}

function drop(contenedor, evento) {
    var id = evento.dataTransfer.getData('Text');
    contenedor.appendChild(document.getElementById(id));
    evento.preventDefault();
    sumar();  
}

//Función que sumará los valores contenidos dentro de tus spans
function sumar() {
    //Capturas todos los elementos spans que están dentro del div con id 'precios'
    var preciosSpan = document.querySelectorAll('#precios span');
    //Obtienes el span donde mostraras el resultado de la suma
    var resultadoSpan = document.querySelector('#resultado');
    //Inicializas la variable que contendrá el resultado de la suma
    var total = 0;
    //Recorres todos los spans dentro del div 'precios'
    preciosSpan.forEach(function(span) {
        //Sumas a total el valor que venia con el más el valor contenido dentro 
        //de cada spans removiendo el caracter '$' y las letras de la moneda 'USD' 
      total += parseFloat(span.innerHTML);
    });
                     
    //Asignas al texto contenido dentro del span del resultado de la suma el valor calculado
    resultado.innerHTML = total + '€';
  }
