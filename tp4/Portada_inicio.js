 function PortadaInicio( Portada,  BotonStar,  BotonCreditos, BotonComandos){
  image(Portada,0,0,800,600);
  image(BotonCreditos,10,500,90,90);
  image(BotonStar,350,450,120,120);
  image(BotonComandos,700,500,90,90);
}

function PantallaGameOver(Pant_GameOver,Puntaje,SalirPierde){
  image(Pant_GameOver,0,100,800,400);
  image(SalirPierde,350,400,60,60);
  fill(255);
  text("PUNTAJE TOTAL:" + Puntaje ,150,300);
}

function PantallaGanador(Pant_Victoria,Puntaje,SalirVictoria){
  image(Pant_Victoria,0,100,800,400);
  image(SalirVictoria,350,400,60,60);
  fill(255);
  text("PUNTAJE TOTAL:" + Puntaje ,150,300)
}
