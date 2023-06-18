// MiVideo (https://www.youtube.com/watch?v=WkanmHNHeYg)
PImage MiOpArt;
float posX1;
float posY1;
float posX2;
float posY2;
float partidaX1;
float partidaY1;
float partidaX2;
float partidaY2;
void setup() {
  size(800, 400);
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
    background(2020);
    image(MiOpArt, 0, 0, 400, 400);
    Cuadrados(410, 10, 380, 380,mouseX,mouseY , 19);
  }
}
