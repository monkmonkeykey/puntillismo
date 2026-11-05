
/*
 * Pintar con código
 * Reconstrucción de imágenes mediante figuras aleatorias.
 */

// 1. VARIABLES GLOBALES

PImage imagen;

int tamanoFigura = 5;
int figurasPorFotograma = 50;


// 2. CONFIGURACIÓN INICIAL

void setup() {
  size(960, 540);

  // Cargamos la imagen desde la carpeta data.
  imagen = loadImage("3.jpg");

  // Ajustamos la imagen al tamaño del lienzo.
  imagen.resize(width, height);

  // Configuramos las propiedades del dibujo.
  background(0);
  noStroke();
  rectMode(CENTER);

  // Establecemos la velocidad objetivo de actualización.
  frameRate(60);
}


// 3. BUCLE DE DIBUJO

void draw() {

  // Repetimos el proceso varias veces por fotograma.
  for (int i = 0; i < figurasPorFotograma; i++) {

    // Seleccionamos una posición aleatoria.
    int posX = int(random(width));
    int posY = int(random(height));

    // Obtenemos el color de la imagen en esa posición.
    color colorPixel = imagen.get(posX, posY);

    // Utilizamos el color obtenido para dibujar.
    fill(colorPixel);

    // Dibujamos un cuadrado en la posición seleccionada.
    rect(posX, posY, tamanoFigura, tamanoFigura);
  }
}
