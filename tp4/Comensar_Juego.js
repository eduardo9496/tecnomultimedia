let posXAvion = 400;
let posYAvion = 450;
let Disparo = false;
let posXBala = 400;
let posYBala = 450;
let PosYFondo= -1080;
let VidaEnemigo1=0;
let VidaEnemigo2=0;
let VidaEnemigo3=0;
let VidaEnemigo4=0;
let VidaEnemigo5=0;
let VidaEnemigo6=0;
let VidaEnemigo7=0;
let VidaEnemigo8=0;
let VidaEnemigo9=0;
let VidaEnemigo10=0;
let VidaEnemigo11=0;
let VidaEnemigo12=0;
let VidaEnemigo13=0;
let VidaEnemigo14=0;
let VidaEnemigo15=0;
let VidaEnemigo16=0;
let VidaEnemigo17=0;
let VidaEnemigo18=0;
let VidaEnemigo19=0;
let VidaEnemigo20=0;
let VidaEnemigo21=0;
let VidaEnemigo22=0;
let GameOver=false;
let Victoria=false;
let Puntaje=0;
let minuto=0;

function PlayJuego(seReinicio, SalirVictoria, SalirPierde, MiFuente, Pant_Victoria, Pant_GameOver, Fondo, Personaje, Enemigo1, Enemigo2, Enemigo3, Enemigo4, Enemigo5, Enemigo6, Enemigo7, Enemigo8, Enemigo9, Enemigo10, Enemigo11, Enemigo12, Enemigo13, Enemigo14, Enemigo15, Enemigo16, Enemigo17, Enemigo18, Enemigo19, Enemigo20, Enemigo21, Enemigo22) {
  if(seReinicio){
    PosYFondo= -1080;
    VidaEnemigo1=0;
    VidaEnemigo2=0;
    VidaEnemigo3=0;
    VidaEnemigo4=0;
    VidaEnemigo5=0;
    VidaEnemigo6=0;
    VidaEnemigo7=0;
    VidaEnemigo8=0;
    VidaEnemigo9=0;
    VidaEnemigo10=0;
    VidaEnemigo11=0;
    VidaEnemigo12=0;
    VidaEnemigo13=0;
    VidaEnemigo14=0;
    VidaEnemigo15=0;
    VidaEnemigo16=0;
    VidaEnemigo17=0;
    VidaEnemigo18=0;
    VidaEnemigo19=0;
    VidaEnemigo20=0;
    VidaEnemigo21=0;
    VidaEnemigo22=0;
    GameOver=false;
    Victoria=false;
    Puntaje=0;
    seReinicio=false;
  }
  background(200);
//movimiento y dibujo del fondo
  if (PosYFondo + round(millis()/30) <= 0) {
    image(Fondo, 0, PosYFondo + round(millis()/30), 800, 1600);
  } else {
    image(Fondo, 0, 0, 800, 1600);
    if (posYAvion<=10) {
      Victoria= true;
    }
  }
//fin movimiento y dibujo del fondo

//dibujo personaje
  image(Personaje, posXAvion, posYAvion, 16, 24);
//fin dibujo personaje

//dibujo los enemigos
  image(Enemigo1[VidaEnemigo1], 275, 300+ round(millis()/30), 22, 20);

  image(Enemigo2[VidaEnemigo2], 350, 200+ round(millis()/30), 22, 20);

  image(Enemigo3[VidaEnemigo3], 395, 275+ round(millis()/30), 22, 16);

  image(Enemigo4[VidaEnemigo4], 300, 100+ round(millis()/30), 22, 20);

  image(Enemigo5[VidaEnemigo5], 460, 164+ round(millis()/30), 22, 20);

  image(Enemigo6[VidaEnemigo6], 490, 250+ round(millis()/30), 22, 16);

  image(Enemigo7[VidaEnemigo7], 400, -100+ round(millis()/30), 22, 20);

  image(Enemigo8[VidaEnemigo8], 350, -145+ round(millis()/30), 22, 20);

  image(Enemigo9[VidaEnemigo9], 450, -50+ round(millis()/30), 22, 16);

  image(Enemigo10[VidaEnemigo10], 300, -20+ round(millis()/30), 22, 20);

  image(Enemigo11[VidaEnemigo11], 310, -80+ round(millis()/30), 22, 16);

  image(Enemigo12[VidaEnemigo12], 320, -330+ round(millis()/30), 22, 20);

  image(Enemigo13[VidaEnemigo13], 360, -330+ round(millis()/30), 22, 20);

  image(Enemigo14[VidaEnemigo14], 410, -330+ round(millis()/30), 22, 16);

  image(Enemigo15[VidaEnemigo15], 410, -550+ round(millis()/30), 22, 16);

  image(Enemigo16[VidaEnemigo16], 300, -500+ round(millis()/30), 22, 16);

  image(Enemigo17[VidaEnemigo17], 410, -400+ round(millis()/30), 22, 16);

  image(Enemigo18[VidaEnemigo18], 400, -500+ round(millis()/30), 22, 16);

  image(Enemigo19[VidaEnemigo19], 330, -600+ round(millis()/30), 22, 16);

  image(Enemigo20[VidaEnemigo20], 420, -900+ round(millis()/30), 22, 16);

  image(Enemigo21[VidaEnemigo21], 368, -800+ round(millis()/30), 22, 16);

  image(Enemigo22[VidaEnemigo22], 326, -900+ round(millis()/30), 22, 16);
//fin dibujar los enemigos

//movimiento de personaje
  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      posXAvion-=2;
    }
    if (keyCode == RIGHT_ARROW) {
      posXAvion+=2;
    }
    if (keyCode == UP_ARROW) {
      posYAvion-=2;
    }
    if (keyCode == DOWN_ARROW) {
      posYAvion+=2;
    }
    if (Disparo==false) {
      posXBala= posXAvion+8;
      posYBala= posYAvion+12;
    }
    if (keyCode == 32) {
      Disparo = true;
    }
  }
//fin movimientos del personaje

//Disparos
  if (Disparo) {
    fill(237, 204, 38);
    stroke(237, 204, 38);
    rect(posXBala, posYBala, 2, 14)
      posYBala-=7;
  }
  if (posYBala<0) {
    Disparo=false;
  }
//fin Disparos

//Colicion bala contra los enemigos
  if (GameOver==false && Victoria == false) {
    if (VidaEnemigo1==0 && dist(275+11, 300+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< (300 + round(millis()/30))+20) {
      VidaEnemigo1=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo1==0 && dist(posXAvion+11, posYAvion, 275+11, 300+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo1=1;
      }
    }

    if (VidaEnemigo2==0 && dist(350+11, 200+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< (200+ round(millis()/30))+20) {
      VidaEnemigo2=1;
      Puntaje+= 100;
      Disparo=false;
    } else {
      if (VidaEnemigo2==0 && dist(posXAvion+11, posYAvion, 350+11, 200+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo2=1;
      }
    }

    if (VidaEnemigo3==0 && dist(395+11, 275+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< (275+round(millis()/30))+16) {
      VidaEnemigo3=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo3==0 && dist(posXAvion+11, posYAvion, 395+11, 275+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo3=1;
      }
    }

    if (VidaEnemigo4==0 && dist(300+11, 100+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< (100 + round(millis()/30))+20) {
      VidaEnemigo4=1;
      Puntaje+= 100;
      Disparo=false;
    } else {
      if (VidaEnemigo4==0  && dist(posXAvion+11, posYAvion, 300+11, 100+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo4=1;
      }
    }

    if (VidaEnemigo5==0 && dist(460+11, 164+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< (164+ round(millis()/30))+20) {
      VidaEnemigo5=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo5==0 &&  dist(posXAvion+11, posYAvion, 460+11, 164+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo5=1;
      }
    }

    if (VidaEnemigo6==0 && dist(490+11, 250+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< (250+round(millis()/30))+16) {
      VidaEnemigo6=1;
      Puntaje+= 100;
      Disparo=false;
    } else {
      if (VidaEnemigo6==0 &&  dist(posXAvion+11, posYAvion, 490+11, 250+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo6=1;
      }
    }

    if (VidaEnemigo7==0 && dist(400+11, -100+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-100) + round(millis()/30))+20) {
      VidaEnemigo7=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo7==0 && dist(posXAvion+11, posYAvion, 400+11, -100+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo7=1;
      }
    }

    if (VidaEnemigo8==0 && dist(350+11, -145+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-145)+ round(millis()/30))+20) {
      VidaEnemigo8=1;
      Puntaje+= 100;
      Disparo=false;
    } else {
      if (VidaEnemigo8==0  && dist(posXAvion+11, posYAvion, 350+11, -145+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo8=1;
      }
    }

    if (VidaEnemigo9==0 && dist(450+11, -50+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-50)+round(millis()/30))+16) {
      VidaEnemigo9=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo9==0 &&  dist(posXAvion+11, posYAvion, 450+11, -50+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo9=1;
      }
    }

    if (VidaEnemigo10==0 && dist(300+11, -20+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-20)+ round(millis()/30))+20) {
      VidaEnemigo10=1;
      Puntaje+= 100;
      Disparo=false;
    } else {
      if (VidaEnemigo10==0  && dist(posXAvion+11, posYAvion, 300+11, -20+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo10=1;
      }
    }

    if (VidaEnemigo11==0 && dist(310+11, -80+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-80)+ round(millis()/30))+20) {
      VidaEnemigo11=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo11==0 &&  dist(posXAvion+11, posYAvion, 310+11, -80+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo11=1;
      }
    }

    if (VidaEnemigo12==0 && dist(320+11, -330+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-330)+round(millis()/30))+16) {
      VidaEnemigo12=1;
      Puntaje+= 100;
      Disparo=false;
    } else {
      if (VidaEnemigo12==0  && dist(posXAvion+11, posYAvion, 320+11, -330+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo12=1;
      }
    }

    if (VidaEnemigo13==0 && dist(360+11, -330+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-330)+ round(millis()/30))+20) {
      VidaEnemigo13=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo13==0 &&  dist(posXAvion+11, posYAvion, 360+11, -330+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo13=1;
      }
    }

    if (VidaEnemigo14==0 && dist(410+11, -330+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-330)+round(millis()/30))+16) {
      VidaEnemigo14=1;
      Puntaje+= 100;
      Disparo=false;
    } else {
      if (VidaEnemigo14==0 &&  dist(posXAvion+11, posYAvion, 410+11, -330+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo14=1;
      }
    }

    if (VidaEnemigo15==0 && dist(410+11, -550+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-550)+round(millis()/30))+16) {
      VidaEnemigo15=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo15==0 &&  dist(posXAvion+11, posYAvion, 410+11, -550+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo15=1;
      }
    }

    if (VidaEnemigo16==0 && dist(300+11, -500+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-500)+round(millis()/30))+16) {
      VidaEnemigo16=1;
      Puntaje+= 100;
      Disparo=false;
    } else {
      if (VidaEnemigo16==0 &&  dist(posXAvion+11, posYAvion, 300+11, -500+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo16=1;
      }
    }

    if (VidaEnemigo17==0 && dist(410+11, -400+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-400)+round(millis()/30))+16) {
      VidaEnemigo17=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo17==0 &&  dist(posXAvion+11, posYAvion, 410+11, -400+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo17=1;
      }
    }

    if (VidaEnemigo18==0 && dist(400+11, -500+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-500)+round(millis()/30))+16) {
      VidaEnemigo18=1;
      Puntaje+= 100;
      Disparo=false;
    } else {
      if (VidaEnemigo18==0  && dist(posXAvion+11, posYAvion, 400+11, -500+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo18=1;
      }
    }

    if (VidaEnemigo19==0 && dist(330+11, -600+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-600)+round(millis()/30))+16) {
      VidaEnemigo19=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo19==0 && dist(posXAvion+11, posYAvion, 330+11, -600+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo19=1;
      }
    }

    if (VidaEnemigo20==0 && dist(420+11, -900+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-900)+round(millis()/30))+16) {
      VidaEnemigo20=1;
      Puntaje+= 100;
      Disparo=false;
    } else {
      if (VidaEnemigo20==0 && dist(posXAvion+11, posYAvion, 420+11, -900+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo20=1;
      }
    }

    if (VidaEnemigo21==0 && dist(368+11, -800+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-800)+round(millis()/30))+16) {
      VidaEnemigo21=1;
      Puntaje+= 50;
      Disparo=false;
    } else {
      if (VidaEnemigo21==0 && dist(posXAvion+11, posYAvion, 368+11, -800+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo21=1;
      }
    }

    if (VidaEnemigo22==0 && dist(326+11, -900+ round(millis()/30), posXBala, posYBala )< 11 && posYBala< ((-900)+round(millis()/30))+16) {
      VidaEnemigo22=1;
      Puntaje+= 200;
      Disparo=false;
    } else {
      if (VidaEnemigo22==0 && dist(posXAvion+11, posYAvion, 326+11, -900+ round(millis()/30)) < 11 ) {
        GameOver=true;
        VidaEnemigo22=1;
      }
    }
  }
//fin colicion bala contra los enemigos

//barra de puntaje
  if (GameOver==false && Victoria==false) {
    noFill();
    noStroke();
    fill(200);
    rect(0, 510, 800, 90);
    fill(0);
    textFont(MiFuente);
    textSize(20);
    if (frameCount % 60 == 0) {
      minuto = minuto + 1;
    }
    text("tiempo:"+ minuto , 400, 550);
    textSize(20);
    text("puntaje:"+Puntaje, 150, 550)
  }
//fin puntaje

//pantallas ganador y perdedor

  if (GameOver==true) {
    PantallaGameOver(Pant_GameOver, Puntaje, SalirPierde);  
  } else {
    if (Victoria==true) {
      PantallaGanador(Pant_Victoria, Puntaje, SalirVictoria);
    }
  }
  
}//fin function
