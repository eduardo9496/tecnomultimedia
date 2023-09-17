//https://youtu.be/pgpVjns0J0I
let PrecionoStrar;
let PrecionoCreditos;
let PrecionoComandos;
let EstoyPortada;
let Portada;
let PantCreditos;
let PantComandos;
let BotonAtras;
let BotonStar;
let BotonCreditos;
let BotonComandos;
let Fondo;
let Personaje= [];
let Enemigo1= [];
let Enemigo2= [];
let Enemigo3= [];
let Enemigo4= [];
let Enemigo5= [];
let Enemigo6= [];
let Enemigo7= [];
let Enemigo8= [];
let Enemigo9= [];
let Enemigo10= [];
let Enemigo11= [];
let Enemigo12= [];
let Enemigo13= [];
let Enemigo14= [];
let Enemigo15= [];
let Enemigo16= [];
let Enemigo17= [];
let Enemigo18= [];
let Enemigo19= [];
let Enemigo20= [];
let Enemigo21= [];
let Enemigo22= [];
let Pant_Victoria;
let Pant_GameOver;
let MiFuente;
let SalirVictoria;
let SalirPierde;
let seReinicio;
let terminoGame;

function preload() {
  Portada= loadImage("data/Inicio.png");
  PantCreditos= loadImage("data/PantallaCreditos.png");
  PantComandos= loadImage("data/PantallaComandos.png");
  BotonAtras= loadImage("data/Atras.png");
  BotonStar= loadImage("data/Star.png");
  BotonCreditos= loadImage("data/Creditos.png");
  BotonComandos= loadImage("data/Comandos.png");
  Fondo= loadImage("data/fondo.png");
  Pant_Victoria= loadImage("data/victoria.png");
  Pant_GameOver= loadImage("data/gameover.png");
  Personaje= loadImage("data/personaje.png");
  MiFuente= loadFont ("data/fuente.otf")
  SalirVictoria= loadImage("data/salirvic.png");
  SalirPierde= loadImage("data/salirpierd.png");
  ;

  Enemigo1[0]= loadImage("data/avion.png");
  Enemigo1[1]= loadImage("data/explocion.png");

  Enemigo2[0]= loadImage("data/elicoptero.png");
  Enemigo2[1]= loadImage("data/explocion.png");

  Enemigo3[0]= loadImage("data/barco.png");
  Enemigo3[1]= loadImage("data/explocion.png");

  Enemigo4[0]= loadImage("data/avion.png");
  Enemigo4[1]= loadImage("data/explocion.png");

  Enemigo5[0]= loadImage("data/elicoptero.png");
  Enemigo5[1]= loadImage("data/explocion.png");

  Enemigo6[0]= loadImage("data/barco.png");
  Enemigo6[1]= loadImage("data/explocion.png");

  Enemigo7[0]= loadImage("data/avion.png");
  Enemigo7[1]= loadImage("data/explocion.png");

  Enemigo8[0]= loadImage("data/elicoptero.png");
  Enemigo8[1]= loadImage("data/explocion.png");

  Enemigo9[0]= loadImage("data/barco.png");
  Enemigo9[1]= loadImage("data/explocion.png");

  Enemigo10[0]= loadImage("data/elicoptero.png");
  Enemigo10[1]= loadImage("data/explocion.png");

  Enemigo11[0]= loadImage("data/barco.png");
  Enemigo11[1]= loadImage("data/explocion.png");

  Enemigo12[0]= loadImage("data/avion.png");
  Enemigo12[1]= loadImage("data/explocion.png");

  Enemigo13[0]= loadImage("data/elicoptero.png");
  Enemigo13[1]= loadImage("data/explocion.png");

  Enemigo14[0]= loadImage("data/barco.png");
  Enemigo14[1]= loadImage("data/explocion.png");

  Enemigo15[0]= loadImage("data/elicoptero.png");
  Enemigo15[1]= loadImage("data/explocion.png");

  Enemigo16[0]= loadImage("data/barco.png");
  Enemigo16[1]= loadImage("data/explocion.png");

  Enemigo17[0]= loadImage("data/elicoptero.png");
  Enemigo17[1]= loadImage("data/explocion.png");

  Enemigo18[0]= loadImage("data/barco.png");
  Enemigo18[1]= loadImage("data/explocion.png");

  Enemigo19[0]= loadImage("data/avion.png");
  Enemigo19[1]= loadImage("data/explocion.png");

  Enemigo20[0]= loadImage("data/elicoptero.png");
  Enemigo20[1]= loadImage("data/explocion.png");

  Enemigo21[0]= loadImage("data/barco.png");
  Enemigo21[1]= loadImage("data/explocion.png");

  Enemigo22[0]= loadImage("data/avion.png");
  Enemigo22[1]= loadImage("data/explocion.png");
}





function setup() {
  createCanvas(800, 600)
  PrecionoStar= false;
  PrecionoCreditos= false;
  PrecionoComandos= false;
  EstoyPortada= true;
  seReinicio= false;
  terminoGame=false;
}


function draw() {
  print(mouseX, mouseY);
  PortadaInicio(Portada, BotonStar, BotonCreditos, BotonComandos);
  if (PrecionoStar) {
    PlayJuego(seReinicio, SalirVictoria, SalirPierde, MiFuente, Pant_Victoria, Pant_GameOver, Fondo, Personaje, Enemigo1, Enemigo2, Enemigo3, Enemigo4, Enemigo5, Enemigo6, Enemigo7, Enemigo8, Enemigo9, Enemigo10, Enemigo11, Enemigo12, Enemigo13, Enemigo14, Enemigo15, Enemigo16, Enemigo17, Enemigo18, Enemigo19, Enemigo20, Enemigo21, Enemigo22);
  }
  
  if (PrecionoCreditos) {
    Creditos( PantCreditos, BotonAtras);
  }
  if (PrecionoComandos) {
    Comandos( PantComandos, BotonAtras);
  }
}



function mousePressed() {

  if (EstoyPortada==true) {
    if (dist(mouseX, mouseY, 410, 510)<60) {
      PrecionoStar=true;
      EstoyPortada=false;
      PrecionoCreditos=false;
      PrecionoComandos=false;
    }
    if (dist(mouseX, mouseY, 55, 545)<45) {
      PrecionoCreditos=true;
      EstoyPortada=false;
      PrecionoStar=false
      PrecionoComandos=false;
    }
    if (dist(mouseX, mouseY, 745, 545)<45) {
      PrecionoComandos=true;
      EstoyPortada=false;
      PrecionoStar=false;
      PrecionoCreditos=false;
    }
  }




  if (EstoyPortada==false) {
    if (PrecionoCreditos == true && dist(mouseX, mouseY, 35, 35)< 25) {
      PrecionoCreditos=false;
      EstoyPortada=true;
    } else {
      if (PrecionoComandos == true && dist(mouseX, mouseY, 35, 35)< 25) {
        PrecionoComandos= false;
        EstoyPortada=true;
      } else {
        if (PrecionoStar == true && dist(mouseX, mouseY, 350+30, 400 +30) < 30){
            seReinicio=true;
            PrecionoStar=false;
            EstoyPortada=true;   
        }
      }
    }
  }
}//fin mousepressed
