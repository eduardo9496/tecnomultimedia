void PortadaInicio(PImage inicio , PFont fuente){
  image(inicio,0,0,600,600);
  DibujarBotonesPortada(fuente);
}

void MostrarCreditos(PImage creditos , PFont fuente ){
  image(creditos,0,0,600,600); 
  MostrarDatos();
  DibujarBotonAtras(fuente);
}

void MostrarOpciones1(){
  
  fill(255,218,3,150);
  ellipse(230,550,50,50);
  ellipse(560,296,50,50);
  fill(0);
  text("A",220,555);
  text("B",545,300);
}

void MostrarOpciones2(){
  fill(255,218,3,150);
  ellipse(230,550,50,50);
  ellipse(560,296,50,50);
  fill(0);
  text("A",220,555);
  text("B",545,300);
}
 
boolean PantallaDeDecisiones1(int posPantalla){
  return(posPantalla==2);
}

boolean PantallaDeDecisiones2(int posPantalla){
  return(posPantalla == 9);
}
