//Tomamos el elemento img del index.html
let imagen = document.querySelector('img')
    //los botones para anterior y siguiente
let Anterior = document.querySelector('#Anterior')
let Siguiente = document.querySelector('#Siguiente')
    //y el titulo del documento. 
let titulo = document.querySelector('h1')

//esta variable puede contener los siguientes valores: golden.jpg | perro.jpg | caniche.jpg | policia.jpg
//Empieza con "golden.jpg" porque es la primer imagen a mostrar. cambiara de valor cuando cambiamos de imagen
//la utilizamos para comprobar que imagen tenemos actualmente
let archivo = 'golden.jpg'

/* 
El boton siguiente, muestra la foto siguiente a la actual. Para eso, le dimos un orden a las fotos
1) Golden 2) Perro 3) Caniche 4) Policia 
Esto nos permite saber lo siguiente : Golden <-- Perro --> Caniche 
Teniendo en cuenta el ejemplo mencionado anteriormente, el anterior de perro es Golden y el siguiente es el Caniche. 
Entonces solo tenemos que hacer la pregunta correcta a la hora de presionar el boton
*/
Siguiente.onclick = function() {
    //Si el archivo de imagen, es un Golden, entonces mostramos el siguiente
    if (archivo == 'golden.jpg') {
        //el siguiente va a ser Perro
        imagen.src = 'perro.jpg'
        titulo.textContent = 'Otra raza de perro'
        archivo = 'perro.jpg'
    } else if (archivo == 'perro.jpg') {
        imagen.src = 'caniche.jpg'
        titulo.textContent = 'Caniche'
        archivo = 'caniche.jpg'
    } else if (archivo == 'caniche.jpg') {
        imagen.src = 'policia.jpg'
        titulo.textContent = 'Policia'
        archivo = 'policia.jpg'
    } else {
        imagen.src = 'golden.jpg'
        titulo.textContent = 'Golden'
        archivo = 'golden.jpg'
    }
}

//el boton anterior, se encarga de mostrar la imagen anterior a la actual
Anterior.onclick = function() {
    // Aca preguntamos si el archivo de imagen es golden
    if (archivo == 'golden.jpg') {
        //si esto es cierto, entonces mostramos su anterior, el cual es policia.
        imagen.src = 'policia.jpg'
        titulo.textContent = 'Policia'
        archivo = 'policia.jpg'
    } else if (archivo == 'perro.jpg') {
        imagen.src = 'golden.jpg'
        titulo.textContent = 'Golden'
        archivo = 'golden.jpg'
    } else if (archivo == 'caniche.jpg') {
        imagen.src = 'perro.jpg'
        titulo.textContent = 'Otra raza de perro'
        archivo = 'perro.jpg'
    } else {
        imagen.src = 'caniche.jpg'
        titulo.textContent = 'Caniche'
        archivo = 'caniche.jpg'
    }
}