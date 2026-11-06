let posX, posY;
function setup() {
  createCanvas(600, 400);
  posX =  displayWidth/2;
  posY = displayHeight/2;
}

function draw() {
  background(250);
  posX = mouseX;
  posY = mouseY;
  // Lineas de referencia.
  stroke(190);
  line(posX, 0,posX, height);
  line(0, posY, width, posY);

  // Punto en la posicion del cursor.
  noStroke();
  fill(35, 140, 115);
  ellipse(posX, posY, 20, 20);

  // Coordenadas actuales.
  fill(30);
  textSize(16);
  text("X: " + posX + "  Y: " + posY, 20, 30);
}
