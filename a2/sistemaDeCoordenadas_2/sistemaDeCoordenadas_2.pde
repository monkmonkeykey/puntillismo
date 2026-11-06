
int origenX = 115;
int origenY = 100;
int ancho = 600;
int alto = 400;
int celda = 50;

char seleccion = '-';
boolean mostrarResultado = false;

void setup() {
  size(820, 580);
  textFont(createFont("Arial", 13));
}

void draw() {
  background(248);

  fill(30);
  textSize(18);
  text("¿Dónde aparecerá ellipse(450, 100, 60, 60)?", 30, 27);

  // 1. Dibujar cuadricula.
  fill(255);
  stroke(210);
  rect(origenX, origenY, ancho, alto);

  for (int x = 0; x <= ancho; x += celda) {
    stroke(220);
    line(origenX + x, origenY,
         origenX + x, origenY + alto);

    // Valores X en pixeles.
    fill(80);
    textAlign(CENTER);
    textSize(11);
    text(x, origenX + x, origenY - 12);
  }

  for (int y = 0; y <= alto; y += celda) {
    stroke(220);
    line(origenX, origenY + y,
         origenX + ancho, origenY + y);

    // Valores Y en pixeles.
    fill(80);
    textAlign(RIGHT);
    textSize(11);
    text(y, origenX - 17, origenY + y + 4);
  }

  // 2. Numerar columnas en la parte superior.
  textAlign(CENTER);
  textSize(13);
  fill(40);

  for (int c = 0; c < ancho / celda; c++) {
    float x = origenX + c * celda + celda / 2;
    text("C" + (c + 1), x, 55);
  }

  // 3. Numerar filas a la izquierda.
  for (int f = 0; f < alto / celda; f++) {
    float y = origenY + f * celda + celda / 2;
    text("F" + (f + 1), 38, y + 5);
  }

  // 4. Mostrar resultado tras comprobar.
  if (mostrarResultado) {
    stroke(40, 145, 110, 130);
    line(origenX + 450, origenY,
         origenX + 450, origenY + 100);
    line(origenX, origenY + 100,
         origenX + 450, origenY + 100);

    stroke(35, 130, 100);
    strokeWeight(2);
    fill(50, 170, 135, 70);
    ellipse(origenX + 450, origenY + 100, 60, 60);
    strokeWeight(1);
  }

  // 5. Puntos de respuesta.
  opcion('A', 150, 100);
  opcion('B', 450, 100);
  opcion('C', 150, 300);
  opcion('D', 450, 300);

  // 6. Instrucciones y retroalimentacion.
  fill(30);
  textAlign(LEFT);
  textSize(13);

  text("Selecciona A, B, C o D. ESPACIO: comprobar. R: reiniciar.", 30, 530);

  if (mostrarResultado) {
    if (seleccion == 'B') {
      fill(25, 135, 85);
      text("Correcto. La elipse se centra en X=450, Y=100.", 30, 556);
    } else {
      fill(180, 90, 40);
      text("Observa el resultado: X=450, Y=100.", 30, 556);
    }
  }
}

// Dibuja una opcion.
void opcion(char nombre, float x, float y) {
  float px = origenX + x;
  float py = origenY + y;

  noStroke();

  if (seleccion == nombre) {
    fill(45, 105, 210);
    ellipse(px, py, 26, 26);
  } else {
    fill(110, 130, 120);
    ellipse(px, py, 18, 18);
  }

  fill(35);
  textAlign(LEFT);
  textSize(16);
  text(nombre, px + 17, py + 5);
}

// Seleccionar con mouse.
void mousePressed() {
  if (mostrarResultado) return;

  comprobarPunto('A', 150, 100);
  comprobarPunto('B', 450, 100);
  comprobarPunto('C', 150, 300);
  comprobarPunto('D', 450, 300);
}

void comprobarPunto(char nombre, float x, float y) {
  if (dist(mouseX, mouseY,
           origenX + x, origenY + y) < 22) {
    seleccion = nombre;
  }
}

// Controles de teclado.
void keyPressed() {
  if (key == 'r' || key == 'R') {
    seleccion = '-';
    mostrarResultado = false;
  }

  if (!mostrarResultado) {
    char letra = Character.toUpperCase(key);

    if (letra == 'A' || letra == 'B' ||
        letra == 'C' || letra == 'D') {
      seleccion = letra;
    }

    if (key == ' ' && seleccion != '-') {
      mostrarResultado = true;
    }
  }
}
