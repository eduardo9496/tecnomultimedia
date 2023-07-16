PImage Creditos;
PImage Portada;
int cantImag1 = 23; 
int cantImag2 = 20;
int cantImag3 = 6;
PImage[] CuentoPrincipal = new PImage[cantImag1];
PImage[] Final_1 = new PImage[cantImag2];
PImage[] Final_2 = new PImage[cantImag2];
int PagActual=-1;
int PagFinal1= 0;
int PagFinal2=0;
PFont fuente;
boolean SeleccionoCreditos = false;
boolean SeleccionoInicio = false;
boolean PrecionoAf1= false;
boolean PrecionoBf1= false;
boolean PrecionoAf2= false;
boolean PrecionoBf2= false;
boolean PrecionoAtras= false;
void setup(){
  size(600,600);
  fuente= loadFont("Georgia-Bold-48.vlw");
  Creditos= loadImage("creditos.png");
  Portada= loadImage("portada.jpg");
  for(int i=0; i<cantImag1; i++){
    CuentoPrincipal[i]= loadImage("cap"+i+".jpg");
  } 
  for(int i=0; i<cantImag2 ; i++){
    Final_1[i]= loadImage("f1Cap"+i+".jpg");
  }
  for(int i=0; i<cantImag3 ; i++){
      Final_2[i]= loadImage("f2Cap"+i+".jpg");
  }


}//es final de setup
  
void draw(){
  println(mouseX,mouseY);
  println(PagFinal1);
  println(PagActual);
  PortadaInicio(Portada,fuente);
  if(SeleccionoCreditos){
    MostrarCreditos(Creditos,fuente);
    if(PrecionoAtras){
      PortadaInicio(Portada,fuente);
      PrecionoAtras=false;
      SeleccionoCreditos=false;
    }
  }else{
     if(SeleccionoInicio){
       image(CuentoPrincipal[PagActual],0,0,600,600);
        boolean LlegoPantallaDecisiones1 = PantallaDeDecisiones1(PagActual);
        if(LlegoPantallaDecisiones1){
          MostrarOpciones1();
        }
     }
  }
  //if(SeleccionoInicio){
  //  boolean LlegoPantallaDecisiones2 = PantallaDeDecisiones2(PagActual);
  //  if(LlegoPantallaDecisiones2){
  //    MostrarOpciones2();
  //  } 
  //}
   

//toma de decisiones 1
  if(PrecionoAf1){
    image(Final_1[PagFinal1],0,0,600,600);
  }else{
    if(PrecionoBf1){
      image(CuentoPrincipal[PagActual],0,0,600,600);
    }
  }
//  

  if(PrecionoAf2){
    image(Final_2[PagFinal2],0,0,600,600);
  }else{
    if(PrecionoBf2){
      image(CuentoPrincipal[PagActual],0,0,600,600);
    }
  }
  
  
  
  
  
}//es el final de draw
void mousePressed(){  
  if(PagActual==-1){  
    if(dist(mouseX,mouseY,100,160)<50 ){
      SeleccionoCreditos = true; 
    }else{
       if(dist(mouseX,mouseY,500,160)<50 ){
         SeleccionoInicio = true;        
       }
    }
    if(dist(mouseX,mouseY,300,500)<40){
        PrecionoAtras=true;
    }
  }
  if(PagActual==2){
    if(dist(mouseX,mouseY,230,550)<25){
      PrecionoAf1= true;
    }else{
      if(dist(mouseX,mouseY,560,296)<25){
        PrecionoBf1= true;
      }
    }
  }
   //boolean LlegoPantallaDecisiones2= PantallaDeDecisiones2(PagActual); 
   //if(LlegoPantallaDecisiones2){
   //  if(dist(mouseX,mouseY,300,300)>50 ){
   //    PrecionoA= true;
   //  }else{
   //    if(dist(mouseX,mouseY,500,300)>50){
   //      PrecionoB= true;
   //    }
   //  }
   //} 
 if(SeleccionoInicio && PagActual!=2 ){
    PagActual++;
 }
  boolean LlegoPantallaDecisiones1 = PantallaDeDecisiones1(PagActual); 
  if(LlegoPantallaDecisiones1){
    if(PrecionoBf1){ 
      PagActual++;
    }
  }else{ 
    if(PrecionoAf1== true ){
      PagFinal1++;
    }
  }
  //if(SeleccionoInicio && PagActual!=2 ){
    //PagActual++;
  //}


}//es el final de mousePressed  
