let Pato;
let PatoMadera;
let Fondo;
let objJuego;
let objAventura;
let Bala;
let Portada;
let gameover;
let victoria;
let imagenes1 =[23];
let imagenes2 =[14];
let imagenes3 =[10];
let textos1=[];
let textos2=[];
let textos3=[];

function preload(){
  Pato= loadImage("data/patito.png");
  PatoMadera= loadImage("data/enemigo.png");
  Fondo= loadImage("data/fondo.png");
  Bala= loadImage("data/balahuevo.png");
  Portada= loadImage("data/portada.png");
  instrucciones= loadImage("data/instrucciones.png");
  gameover= loadImage("data/gameover.png");
  victoria= loadImage("data/victoria.png");
  for(let i=0; i<23 ; i++){
    imagenes1[i]=loadImage("data/cap"+i+".jpg");
  }
  for(let i=0; i<14 ; i++){
    imagenes2[i]=loadImage("data/f2cap"+i+".jpg")
  }
  for(let i=0; i<10 ; i++){
    imagenes3[i]=loadImage("data/f3cap"+i+".jpg")
  }
  textos1= loadStrings("data/texto1.txt");
  textos2= loadStrings("data/texto2.txt");
  textos3= loadStrings("data/texto3.txt");
  
}//fin preload


function setup() {
  createCanvas(800,600);
  for(let i=0; i<textos1.length; i++){
    textos1[i]= textos1[i].replaceAll("\\\\n","\n");
  }
  for(let i=0; i<textos2.length;i++){
    textos2[i]= textos2[i].replaceAll("\\\\n","\n");
  }
  for(let i=0; i<textos3.length; i++){
    textos3[i]= textos3[i].replaceAll("\\\\n","\n");
  }
  objJuego= new juego(); 
  objAventura= new aventura();
}


function draw(){
  objAventura.dibujar();
  //objJuego.dibujar();
}//fin draw

function keyPressed(){
  objJuego.teclaDisparo(keyCode)
}
