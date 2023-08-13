//https://youtu.be/RYYHNa7KFcg
PImage Creditos;
PImage Portada;
int cantImag1 = 23; 
int cantImag2 = 14;
int cantImag3 = 10;
PImage[] CuentoPrincipal = new PImage[cantImag1];
PImage[] Final_1 = new PImage[cantImag2];
PImage[] Final_2 = new PImage[cantImag3];
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
String[]TextosFinal1;
String[]TextosFinal2;
String[]TextosFinal3;


void setup(){
  size(600,600);
  TextosFinal1= loadStrings("texto1.txt");
  TextosFinal2= loadStrings("texto2.txt");
  TextosFinal3= loadStrings("texto3.txt");
  for(int i=0; i<TextosFinal1.length; i++){
    TextosFinal1[i]= TextosFinal1[i].replaceAll("\\\\n","\n");
  }
  for(int i=0; i<TextosFinal2.length;i++){
    TextosFinal2[i]= TextosFinal2[i].replaceAll("\\\\n","\n");
  }
  for(int i=0; i<TextosFinal3.length; i++){
    TextosFinal3[i]= TextosFinal3[i].replaceAll("\\\\n","\n");
  }
  fuente= loadFont("Georgia-Bold-48.vlw");
  Creditos= loadImage("creditos.png");
  Portada= loadImage("portada.jpg");
  for(int i=0; i<cantImag1; i++){
    CuentoPrincipal[i]= loadImage("cap"+i+".jpg");
  } 
  for(int i=0; i<cantImag2 ; i++){
    Final_1[i]= loadImage("f2cap"+i+".jpg");
  }
  for(int i=0; i<cantImag3 ; i++){
      Final_2[i]= loadImage("f3cap"+i+".jpg");
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
       if(PagActual<2){
         fill(242, 216, 12,200);
         rect(0, 430, 600, 100);
         textSize(12);
         fill(0);
         text(TextosFinal1[PagActual],3, 480);
       }else {
         fill(242, 216, 12,200);
         rect(0, 0, 600, 100);
         textSize(12);
         fill(0);
         text(TextosFinal1[PagActual], 3,50);
      }
       boolean LlegoPantallaDecisiones1= PantallaDeDecisiones1(PagActual);
       if(LlegoPantallaDecisiones1){
         MostrarOpciones1();
       }  
     }
  }
//toma de decisiones 1
  if(PrecionoAf1){
    image(Final_1[PagFinal1],0,0,600,600);
    fill(242,216,12,200);
    rect(0,0,600,100);
    fill(0);
    textSize(12);
    text(TextosFinal2[PagFinal1],3,50);
  }else{
    if(PrecionoBf1){
      image(CuentoPrincipal[PagActual],0,0,600,600);
      fill(242, 216, 12,200);
      rect(0, 0, 600, 100);
      fill(0);
      text(TextosFinal1[PagActual],3,50);
      boolean LlegoPantallaDecisiones2 = PantallaDeDecisiones2(PagActual);
      if(LlegoPantallaDecisiones2){
        MostrarOpciones2();
        if(PrecionoAf2){
          image(Final_2[PagFinal2],0,0,600,600);
          fill(243,223,6,200);
          rect(0,0,600,100);
          fill(0);
          textSize(12);
          text(TextosFinal3[PagFinal2],3,25);
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
  if(PagFinal1==13){
    PrecionoReiniciar2= false;
    DibujarBotonReiniciar2();
    if(PrecionoReiniciar2){
      PortadaInicio(Portada,fuente);
    }
  } 
  if(PagFinal2==9){ 
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
  if(PrecionoAf1 && PagFinal1!=13){
      PagFinal1++;
  }
//fin toma de decisiones 1

//toma de decisiones 2
  boolean LlegoPantallaDecisiones2= PantallaDeDecisiones2(PagActual);
  if(LlegoPantallaDecisiones2){
    if(PrecionoBf2 ){
      PagActual++;
    }
    if(PrecionoAf2 && PagFinal2!= 9){
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
  if(PagFinal1==13){
    if(dist(mouseX,mouseY,300,500)<40){
      PrecionoReiniciar2= true;
      PagFinal1=-1;
      PagActual=-1;
      SeleccionoInicio= false;
      PrecionoAf1= false;
    }
  }
  if(PagFinal2==9){
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
