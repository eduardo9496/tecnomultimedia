let Pato;
let PatoMadera;
let Fondo;
let objJuego;
let Bala;


function preload(){
  Pato= loadImage("data/patito.png");
  PatoMadera= loadImage("data/enemigo.png");
  Fondo= loadImage("data/fondo.png");
  Bala= loadImage("data/balahuevo.png");
}
function setup() {
  createCanvas(800,600);
  objJuego= new Juego();
}


function draw() {
  background(215);
  objJuego.dibujar();
}

function keyPressed(){
  objJuego.teclaDisparo(keyCode)
}
