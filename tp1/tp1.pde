PFont Fuente1;
PFont Fuente2;
PFont Fuente2b;
PFont Fuente3;
PImage Imagen1;
PImage Imagen2;
PImage Imagen3;
PImage Boton;
int Minuto;
int posx;
int posy;
int tamaño;
int transparencia;

void setup () {
  size(640, 480);
  Fuente1= loadFont("Constantia-50.vlw");
  Fuente2= loadFont("Constantia-BoldItalic-48.vlw");
  Fuente2b= loadFont("Constantia-BoldItalic-48.vlw");
  Fuente3= loadFont("HPSimplified-Bold-48.vlw");
  Boton=loadImage ("Boton.png");
  Imagen1=loadImage ("Imag1.jpg");
  Imagen2=loadImage ("Imag2.jpg");
  Imagen3=loadImage ("Imag3.jpg");
  Minuto=0;
  posx=680;
  posy=510;
  tamaño=0;
  transparencia=-10;
};
void draw() {
  if (frameCount % 60 == 0) {
    Minuto = Minuto + 1;
  };
  if (Minuto<=12) {
    image(Imagen1, 0, 0, 640, 480);
    if (Minuto>=1) {
      fill(116, 103, 103, 150);
      rect(300, 21, 334, 150);
    };
    if (Minuto>2) {
      fill(0, 0, 0, transparencia);
      transparencia=transparencia+3;
      textFont(Fuente1, 20);
      text("En 1789 Blanchar y Maguier dos\ninventores franceses, desarrollaron su\npropio modelo de triciclo, pero fue en\nel año 1818 cuando patentó, y fue por\nparte del inventor británico\nDenis Johnson.", 305, 40);
    };
  } else {
    if (Minuto<=28) {
      image(Imagen2, 0, 0, 640, 480);
      if (Minuto>14) {
        fill(80,42,42,150);
        rect(0,0,225,130);
      };
      if (Minuto>15) {
        posx=posx-3;
        fill(255);
        textFont(Fuente2,22);
        text("A lo largo del tiempo\nse fue modernizado\nbasado en el modelo\n original. ",posx, 24);
        if(posx<=6){
          posx=5;
        };  
      if(Minuto>17 && posx==5){
        posy=posy-5;
        fill(80,42,42, 150);
        rect(300,70,234,190);
        fill(255);
        textFont(Fuente2b,16);
        text("CAMBIOS CARACTERISTICOS:",300,90); 
        text("-Estructura\n-Pedales\n-Llantas\n-Un Canasto de carga\n-Cadena\n-ETC....",305,posy);
        if(posy<=131){
          posy=130;
        };  
      };
     };
    }else {
      if (Minuto<=34) {
        image(Imagen3, 0, 0, 640, 480);
        if(Minuto>30){
          fill(215,250,78,150);
          rect(0,0,400,156);
        if(Minuto>31){
          tamaño=tamaño+1;
          fill(0);
          textFont(Fuente3,tamaño);
          text("En la actualidad es muy utilizado\npor personas de mayor edad los\ncuales no puden o no pudieron\naprender a manejar una\nbicicleta 'ESTANDARD' ",5,20);
          if(tamaño>=26){
            tamaño=25;
          };
        };  
        };  
      };
    };
  };
  if (Minuto>=50) {
    background(170);
    fill(0);
    textSize(40);
    text("LA PRECENTACION FINALIZO\nGRACIAS POR SU ATENCION",80,70);
    fill(10));
    textSize(20);
    text("Si desea volver a ver la precentacion\n  'CLICK EN EL BOTON'",150,250);
    image(Boton, 260, 300, 100, 100);
  };
};
void mousePressed(){
  if (dist(mouseX, mouseY, 310, 350) < 50) {
    Minuto=0;
    posx=680;
    posy=510;
    tamaño=0;
    transparencia=-10;
 };
};
