void Cuadrados(){
  if(mouseX>400 && mouseX<800 && mouseY>0 && mouseY<400){
  rectMode(CENTER);
  pushMatrix();
  translate(600,200);
  fill(255);
  rect(0,0,390,390);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo2));
  fill(0);
  rect(mouseX-600,mouseY-200,370,370);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo3));
  fill(255);
  rect(mouseX-600,mouseY-200,350,350);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo4));
  fill(0);
  rect(mouseX-600,mouseY-200,330,330);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo5));
  fill(255);
  rect(mouseX-600,mouseY-200,310,310);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo6));
  fill(0);
  rect(mouseX-600,mouseY-200,290,290);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo7));
  fill(255);
  rect(mouseX-600,mouseY-200,270,270);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo8));
  fill(0);
  rect(mouseX-600,mouseY-200,250,250);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo9));
  fill(255);
  rect(mouseX-600,mouseY-200,230,230);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo10));
  fill(0);
  rect(mouseX-600,mouseY-200,210,210);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo11));
  fill(255);
  rect(mouseX-600,mouseY-200,190,190);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo12));
  fill(0);
  rect(mouseX-600,mouseY-200,170,170);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo13));
  fill(255);
  rect(mouseX-600,mouseY-200,150,150);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo14));
  fill(0);
  rect(mouseX-600,mouseY-200,130,130);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo15));
  fill(255);
  rect(mouseX-600,mouseY-200,110,110);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo16));
  fill(0);
  rect(mouseX-600,mouseY-200,90,90);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo17));
  fill(255);
  rect(mouseX-600,mouseY-200,70,70);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo18));
  fill(0);
  rect(mouseX-600,mouseY-200,50,50);
  popMatrix();
  
  pushMatrix();
  translate(600,200);
  rotate(radians(angulo19));
  fill(255);
  rect(mouseX-600,mouseY-200,30,30);
  popMatrix();
  } 
}
void Cuadrados1(float x1, float y1, float ancho1, float alto1, float partX1, float partY1, float cant) {
  for ( float i=0; i<cant; i++ ) {
    float anchoRect = map( i, 0, cant, ancho1, 0);
    float altoRect = map( i, 0, cant, alto1, 0);
    float PosX1 = map( i, 0, cant, x1, partX1  );
    float PosY1 = map( i, 0, cant, y1, partY1 );
    boolean esPar = calculo(i);
    if (esPar) {
      fill(255);
    } else {
      fill(0);
    }
    rect(PosX1, PosY1, anchoRect, altoRect);
  }
}

void Cuadrados2( float x2, float y2, float ancho2, float alto2, float partX2, float partY2, float cant) {
  for ( float i=0; i<cant; i++ ) {
    float anchoRect = map( i, 0, cant, ancho2, 0);
    float altoRect = map( i, 0, cant, alto2, 0);
    float PosX2 = map( i, 0, cant, x2, partX2  );
    float PosY2 = map( i, 0, cant, y2, partY2 );
    boolean esPar = calculo(i);
    if (esPar) {
      fill(255);
    } else {
      fill(0);
    }
    rect(PosX2, PosY2, anchoRect, altoRect);
  }
}
