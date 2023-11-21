class patoenemigo {
  constructor(posX,posY) {
    this.patomalo= PatoMadera;
    this.posX= posX;
    this.posY= posY;
    this.vida=true;
  }


  dibujar() {
    //this.mover();
    if(this.vida){
      this.mover();
      image(this.patomalo, this.posX, this.posY, 60, 60);
    }  
  }
  
  mover(){
    this.posY += 1;
  }
  
  murio(){
    this.vida=false
  }
  
  colicionoBala(bala){
    if(dist(this.posX,this.posY, bala.posXbala , bala.posYbala) < 30){
      this.murio();
    }
  }


}//fin class
