class Patito {
  constructor() {
    this.pato= Pato;
    this.posXpato= 400;
    this.posYpato= 500;
    this.vidapatito=1;
    this.bala = new Disparo ();
    
  }

  dibujar() {
    this.bala.dibujarbala();
    image(this.pato, this.posXpato, this.posYpato, 60, 60);
    if (keyIsPressed === true) {
      if (keyCode == LEFT_ARROW) {
        this.posXpato -= 2;
      } else if (keyCode == RIGHT_ARROW) {
        this.posXpato += 2;
      } else if (keyCode == UP_ARROW) {
        this.posYpato -= 2;
      } else if (keyCode == DOWN_ARROW) {
        this.posYpato += 2;
      }
    }
  }
  teclaDisparo(keyCode){
    if(keyCode===32){
      this.dispararBala();
    }
  }
  dispararBala(){
    this.bala= new Disparo(this.posXpato,this.posYpato);
    this.bala.disparar();
  }
  //mover(){
  
  //}
  
  //patitoestavivo(){
  
  //}
}//fin class
