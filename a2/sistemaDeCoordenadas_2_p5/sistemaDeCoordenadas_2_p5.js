
let origenX = 115;
let origenY = 100;
let ancho = 600;
let alto = 400;
let celda = 50;

let seleccion = "-";
let mostrarResultado = false;

function setup() {
  createCanvas(820, 580);
  textFont("Arial");
}

function draw() {
  background(248);

  fill(30);
  textSize(18);
  noStroke();
  text("¿Dónde aparecerá ellipse(450, 100, 60, 60)?", 30, 27);

  // 1. Cuadricula.
  fill(255);
  stroke(210);
  rect(origenX, origenY, ancho, alto);

  for (let x = 0; x <= ancho; x += celda) {
    stroke(220);
    line(origenX + x, origenY,
         origenX + x, origenY + alto);

    fill(80);
    noStroke();
    textAlign(CENTER);
    textSize(11);
    text(x, origenX + x, origenY - 12);
  }

  for (let y = 0; y <= alto; y += celda) {
    stroke(220);
    line(origenX, origenY + y,
         origenX + ancho, origenY + y);

    fill(80);
    noStroke();
    textAlign(RIGHT);
    textSize(11);
    text(y, origenX - 17, origenY + y + 4);
  }

  // 2. Columnas.
  noStroke();
  textAlign(CENTER);
  textSize(13);
  fill(40);

  for (let c = 0; c < ancho / celda; c++) {
    let x = origenX + c * celda + celda / 2;
    text("C" + (c + 1), x, 55);
  }

  // 3. Filas.
  for (let f = 0; f < alto / celda; f++) {
    let y = origenY + f * celda + celda / 2;
    text("F" + (f + 1), 38, y + 5);
  }

  // 4. Resultado.
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

  // 5. Respuestas.
  opcion("A", 150, 100);
  opcion("B", 450, 100);
  opcion("C", 150, 300);
  opcion("D", 450, 300);

  // 6. Retroalimentacion.
  noStroke();
  fill(30);
  textAlign(LEFT);
  textSize(13);
  text("A/B/C/D: seleccionar | ESPACIO: comprobar | R: reiniciar",
       30, 530);

  if (mostrarResultado) {
    if (seleccion === "B") {
      fill(25, 135, 85);
      text("Correcto. La elipse se centra en X=450, Y=100.", 30, 556);
    } else {
      fill(180, 90, 40);
      text("Observa el resultado: X=450, Y=100.", 30, 556);
    }
  }
}

function opcion(nombre, x, y) {
  let px = origenX + x;
  let py = origenY + y;

  noStroke();

  if (seleccion === nombre) {
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

function mousePressed() {
  if (mostrarResultado) return;

  comprobarPunto("A", 150, 100);
  comprobarPunto("B", 450, 100);
  comprobarPunto("C", 150, 300);
  comprobarPunto("D", 450, 300);
}

function comprobarPunto(nombre, x, y) {
  if (dist(mouseX, mouseY,
           origenX + x, origenY + y) < 22) {
    seleccion = nombre;
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    seleccion = "-";
    mostrarResultado = false;
  }

  if (!mostrarResultado) {
    let letra = key.toUpperCase();

    if (["A", "B", "C", "D"].includes(letra)) {
      seleccion = letra;
    }

    if (key === " " && seleccion !== "-") {
      mostrarResultado = true;
    }
  }

  if (key === " ") return false;
}
