
/*
 Dibujando con píxeles.
 Ejercicio de puntillismo
*/

// 1. Variables globales.

let imagen;

let tamanoFigura = 5;
let figurasPorFotograma = 50;


// 2. Carga de recursos

function preload() {
  // Cargamos la imagen antes de iniciar el programa.
  imagen = loadImage("3.jpg");
}


// 3. Configuración inicial

function setup() {
  createCanvas(960, 540);

  // Ajustamos la imagen al tamaño del lienzo.
  imagen.resize(width, height);

  // Configuramos las propiedades del dibujo.
  background(0);
  noStroke();
  rectMode(CENTER);

  // Establecemos la velocidad objetivo de actualización.
  frameRate(60);
}


// 4. Bucle de dibujo

function draw() {

  // Repetimos el proceso varias veces por fotograma.
  for (let i = 0; i < figurasPorFotograma; i++) {

    // Seleccionamos una posición aleatoria.
    let posX = floor(random(width));
    let posY = floor(random(height));

    // Obtenemos el color de la imagen en esa posición.
    let colorPixel = imagen.get(posX, posY);

    // Utilizamos el color obtenido para dibujar.
    fill(colorPixel);

    // Dibujamos un cuadrado en la posición seleccionada.
    rect(posX, posY, tamanoFigura, tamanoFigura);
  }
}
