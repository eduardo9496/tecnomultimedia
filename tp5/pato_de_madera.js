class Patoenemigo {
  constructor(posX,posY) {
    this.patomalo= PatoMadera;
    this.posX= posX;
    this.posY= posY;
    this.vida=1;
  }


  dibujar() {
    for(let i =0; i<100; i++){
      image(this.patomalo, this.posX, this.posY, 60, 60);
    }
}
  
  estavivo(){
  
  }
  
}//fin class
