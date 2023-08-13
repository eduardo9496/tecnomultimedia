//https://youtu.be/ybPTJREuyBc
PImage MiOpArt;
float posX1;
float posY1;
float posX2;
float posY2;
float partidaX1;
float partidaY1;
float partidaX2;
float partidaY2;
int  angulo1; 
int  angulo2;
int  angulo3;
int  angulo4;
int  angulo5;
int  angulo6;
int  angulo7;
int  angulo8;
int  angulo9;
int  angulo10;
int  angulo11;
int  angulo12;
int  angulo13;
int  angulo14;
int  angulo15;
int  angulo16;
int  angulo17;
int  angulo18;
int  angulo19;
boolean ClickDerecho;
boolean ClickIzquierdo;
void setup(){
  size(800,400);
  posX1=410;
  posY1=10;
  posX2=410;
  posY2=210;
  partidaX1=(width/2)+100;
  partidaY1=(height/2)-100;
  partidaX2=(width/2)+100;
  partidaY2=(height/2)+100;
  MiOpArt=loadImage("Obra.jpg");
}

void draw() {
  image(MiOpArt, 0, 0, 400, 400);
  for (int i=0; i<2; i++) {
    Cuadrados1(posX1, posY1, 180, 180, partidaX1, partidaY1, 19);
    posX1=posX1+200;
    partidaX1=partidaX1+200;
    for (int j=0; j<2; j++) {
      Cuadrados2(posX2, posY2, 180, 180, partidaX2, partidaY2, 19);
      partidaX2=partidaX2+200;
      posX2=posX2+200;
    }
  }
  if ( key == 'a' ) {
    background(0,183,247);
    image(MiOpArt, 0, 0, 400, 400);
    Cuadrados();
    if(mouseButton == LEFT){
      ClickIzquierdo= true;
    }else{
      ClickIzquierdo= false;
    }
  
    if(mouseButton == RIGHT){
      ClickDerecho=true; 
    }else{
      ClickDerecho=false;
    }
  }
}

void mousePressed() {
 if(ClickIzquierdo==true){
   angulo1+=1; 
   angulo2+=2;
   angulo3+=3;
   angulo4+=4;
   angulo5+=5;
   angulo6+=6;
   angulo7+=7;
   angulo8+=8;
   angulo9+=9;
   angulo10+=10;
   angulo11+=11;
   angulo12+=12;
   angulo13+=13;
   angulo14+=14;
   angulo15+=15;
   angulo16+=16;
   angulo17+=17;
   angulo18+=18;
   angulo19+=19;
 }else{
   if(ClickDerecho==true){
   angulo1-=1; 
   angulo2-=2;
   angulo3-=3;
   angulo4-=4;
   angulo5-=5;
   angulo6-=6;
   angulo7-=7;
   angulo8-=8;
   angulo9-=9;
   angulo10-=10;
   angulo11-=11;
   angulo12-=12;
   angulo13-=13;
   angulo14-=14;
   angulo15-=15;
   angulo16-=16;
   angulo17-=17;
   angulo18-=18;
   angulo19-=19;
  } 
 }
}
