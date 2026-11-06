final int TAMANO_AVE = 75;
final float PASO_NOISE = 0.015;

float tiempoNoise = 0;

PImage fondo;
PImage ave;

void setup() {
  size(900, 504);
  pixelDensity(1);

  // Processing busca estos archivos dentro de data.
  fondo = loadImage("back.png");
  ave = loadImage("bird.png");
}

void draw() {
  // Limpiamos y dibujamos el fondo.
  background(255);
  image(fondo, 0, 0, width, height);

  // Desplazamiento horizontal.
  int posX = frameCount % width;

  // Variación vertical mediante noise().
  tiempoNoise += PASO_NOISE;
  float posY = noise(tiempoNoise) * (height - TAMANO_AVE);

  // Dibujamos el ave sobre el fondo.
  image(ave, posX, posY, TAMANO_AVE, TAMANO_AVE);
}
