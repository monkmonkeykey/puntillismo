const DIAMETRO = 5;
const PASO = 5;

let posX;
let posY;

function setup() {
  createCanvas(1280, 720);
  background(255);
  noStroke();

  posX = width / 2;
  posY = height / 2;
}

function draw() {
  const direccion = floor(random(1, 5));

  if (direccion === 1) {
    // Derecha: azul.
    posX += PASO;
    fill("#287ED1");
  } else if (direccion === 2) {
    // Izquierda: amarillo.
    posX -= PASO;
    fill("#F0E479");
  } else if (direccion === 3) {
    // Arriba: verde.
    posY -= PASO;
    fill("#64A569");
  } else {
    // Abajo: rojo.
    posY += PASO;
    fill("#ED4A58");
  }

  ellipse(posX, posY, DIAMETRO, DIAMETRO);
}
