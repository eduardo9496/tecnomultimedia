class Disparo {
  constructor(posX,posY) {
    this.BalaHuevo= Bala;
    this.posXbala=posX;
    this.posYbala=posY;
    this.disparada=false;
  }
  dibujarbala() {
    if (this.disparada) {
        //fill(237, 204, 38);
        image(this.BalaHuevo,this.posXbala, this.posYbala, 15, 18)
        this.mover();
    }
  }
  
  mover(){
    this.posYbala-=7;
  }
  
  
  disparar(){
    this.disparada=true;
  }
}
  //moverbala(){
  
  
  //}
