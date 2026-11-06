int posX, posY;
void setup() {
  size(600, 400);
  posX = width/2;
  posY = height/2;
}

void draw() {
  background(250);

  // Lineas de referencia.
  stroke(190);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);

  // Punto en la posicion del cursor.
  noStroke();
  fill(35, 140, 115);
  ellipse(mouseX, mouseY, 20, 20);

  // Coordenadas actuales.
  fill(30);
  textSize(16);
  text("X: " + mouseX + "  Y: " + mouseY, 20, 30);
}
  
