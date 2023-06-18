void Cuadrados( float x, float y, float ancho, float alto, float pxPartida, float pyPartida, float cant) {
  for ( float i=0; i<cant; i++ ) {
    float nuevoAncho = map( i, 0, cant, ancho, 0);
    float nuevoAlto = map( i, 0, cant, alto, 0);
    float PosX = map( i, 0, cant, x, pxPartida );
    float PosY = map( i, 0, cant, y, pyPartida );
    boolean esPar = calculo(i);
    if (esPar) {
      fill(255);
    } else {
      fill(0);
    }
    rect(PosX,PosY, nuevoAncho, nuevoAlto);
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
