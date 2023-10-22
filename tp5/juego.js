class Juego{
  constructor(posX,posY){
    this.laguna = new Laguna() ;
    this.patito= new Patito();
    this.patosmadera= []; 
    for(let i=0; i<100 ; i++){
      this.patosmadera[i]= new Patoenemigo(random(50,width-50),random(-2400,400));
    }
  }
  
  dibujar(){
    this.laguna.dibujar();
    this.patito.dibujar();
    for(let i=0; i<100 ; i++){
      this.patosmadera[i].dibujar();
    }

  }
  teclaDisparo(keyCode){
    this.patito.teclaDisparo(keyCode);
  }
  
}
