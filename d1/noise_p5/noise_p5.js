const TAMANO_AVE = 75;
const PASO_NOISE = 0.015;

let tiempoNoise = 0;

let fondo;
let ave;

function preload() {
  // Cargamos las imágenes antes de iniciar el dibujo.
  fondo = loadImage("data/back.png");
  ave = loadImage("data/bird.png");
}

function setup() {
  createCanvas(900, 504);
  pixelDensity(1);
}

function draw() {
  // Limpiamos y dibujamos el fondo.
  background(255);
  image(fondo, 0, 0, width, height);

  // Desplazamiento horizontal.
  const posX = frameCount % width;

  // Variación vertical mediante noise().
  tiempoNoise += PASO_NOISE;
  const posY = noise(tiempoNoise) * (height - TAMANO_AVE);

  // Dibujamos el ave sobre el fondo.
  image(ave, posX, posY, TAMANO_AVE, TAMANO_AVE);
}
