class juego {
  constructor() {
    this.laguna = new laguna() ;
    this.patitos= new patito();
    this.patosmadera= [];
    for (let i=0; i<100; i++) {
      this.patosmadera[i]= new patoenemigo(random(50, width-50), random(-1400, 400));
    }
    this.pantallaPerdio= gameover;
    this.pantallaGano= victoria;
    this.portada= Portada;
  }

  dibujar() {
    this.laguna.dibujar();
    this.patitos.dibujar();
    for (let i=0; i<100; i++) {
      this.patosmadera[i].dibujar();
    }
    this.controlDeDisparo();
    
    this.gano();
  }


  teclaDisparo(keyCode) {
    this.patitos.teclaDisparo(keyCode);
  }

  controlDeDisparo() {
    if (this.patitos.haDisaparado()) {
      for (let i=0; i<100; i++) {
        this.patosmadera[i].colicionoBala(this.patitos.bala);
      }
    }
  }
  
  gano(){
    if(this.patitos.haLlegado()){
      image(this.pantallaGano,0,0,800,600);  
    }
  }
   
     
  perdio(){
  
  }
}// fin class Juego
