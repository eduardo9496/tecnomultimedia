//https://youtu.be/0SgbqdED2no
PImage Creditos;
PImage Portada;
int cantImag1 = 23; 
int cantImag2 = 20;
int cantImag3 = 6;
PImage[] CuentoPrincipal = new PImage[cantImag1];
PImage[] Final_1 = new PImage[cantImag2];
PImage[] Final_2 = new PImage[cantImag2];
int PagActual=-1;
int PagFinal1=-1;
int PagFinal2=-1;
PFont fuente;
boolean SeleccionoCreditos = false;
boolean SeleccionoInicio = false;
boolean PrecionoAf1= false;
boolean PrecionoBf1= false;
boolean PrecionoAf2= false;
boolean PrecionoBf2= false;
boolean PrecionoAtras= false;
boolean PrecionoReiniciar1= false;
boolean PrecionoReiniciar2= false;
boolean PrecionoReiniciar3= false;
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
       boolean LlegoPantallaDecisiones1= PantallaDeDecisiones1(PagActual);
       if(LlegoPantallaDecisiones1){
         MostrarOpciones1();
       }  
     }
   }
//toma de decisiones 1
  if(PrecionoAf1){
    image(Final_1[PagFinal1],0,0,600,600);
  }else{
    if(PrecionoBf1){
      image(CuentoPrincipal[PagActual],0,0,600,600);
      boolean LlegoPantallaDecisiones2 = PantallaDeDecisiones2(PagActual);
      if(LlegoPantallaDecisiones2){
        MostrarOpciones2();
        if(PrecionoAf2){
          image(Final_2[PagFinal2],0,0,600,600);
        }else{
          if(PrecionoBf2){
            image(CuentoPrincipal[PagActual],0,0,600,600);
          }
        }     
      }
    }
  }
  if(PagActual==22){
    PrecionoReiniciar1= false;
    DibujarBotonReiniciar1();
    if(PrecionoReiniciar1){
      PortadaInicio(Portada,fuente);
    }
  }
  if(PagFinal1==19){
    PrecionoReiniciar2= false;
    DibujarBotonReiniciar2();
    if(PrecionoReiniciar2){
      PortadaInicio(Portada,fuente);
    }
  } 
  if(PagFinal2==5){ 
    PrecionoReiniciar3= false;
    DibujarBotonReiniciar3();   
    if(PrecionoReiniciar3){
      PortadaInicio(Portada,fuente);
    }
  }
    
  
  

  
  
  
  
}//es el final de draw
void mousePressed(){  
//inicio
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
//fin inicio
  if(SeleccionoInicio && PagActual!= 2 && PagActual!= 9 && PagActual!= 22){
    PagActual++; 
  }   
//evaluando si precione los botones
  if(PagActual==2){
    if(dist(mouseX,mouseY,230,550)<25){
      PrecionoAf1= true;
    }else{
      if(dist(mouseX,mouseY,560,296)<25){
        PrecionoBf1= true;
      }
    }
  }else{
    if(PagActual==9){
      if(dist(mouseX,mouseY,230,550)<25){
        PrecionoAf2=true;  
      }else{
        if(dist(mouseX,mouseY,560,296)<25){
          PrecionoBf2=true;
        }
      }
    }
  }
//fin de evaluacion
  
//toma de decisiiones 1
  boolean LlegoPantallaDecisiones1 = PantallaDeDecisiones1(PagActual); 
  if(LlegoPantallaDecisiones1){
    if(PrecionoBf1){ 
      PagActual++;
    }
  }
  if(PrecionoAf1 && PagFinal1!= 19){
      PagFinal1++;
  }
//fin toma de decisiones 1

//toma de decisiones 2
  boolean LlegoPantallaDecisiones2= PantallaDeDecisiones2(PagActual);
  if(LlegoPantallaDecisiones2){
    if(PrecionoBf2 ){
      PagActual++;
    }
    if(PrecionoAf2 && PagFinal2!= 5){
      PagFinal2++; 
    }
  }
  if(PagActual==22){
    if(dist(mouseX,mouseY,300,500)<40){
      PrecionoReiniciar1= true;
      SeleccionoInicio=false;
      PagActual=-1;
      PrecionoBf1= false;
      PrecionoBf2= false;
    } 
  }
  if(PagFinal1==19){
    if(dist(mouseX,mouseY,300,500)<40){
      PrecionoReiniciar2= true;
      PagFinal1=-1;
      PagActual=-1;
      SeleccionoInicio= false;
      PrecionoAf1= false;
    }
  }
  if(PagFinal2==5){
    if(dist(mouseX,mouseY,300,500)<40){
      PrecionoReiniciar3= true;
      PagFinal2=-1;
      PagActual=-1;
      SeleccionoInicio=false;
      PrecionoAf2= false;
      PrecionoBf2=false;
      PrecionoBf1=false;
    } 
  } 
    
} 
