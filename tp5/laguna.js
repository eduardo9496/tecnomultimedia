class laguna {
  constructor(){
    this.fondo= Fondo;
    this.tamY= -1400;
    //this.bajar= round(millis()/30);
    
  }
  
  dibujar(){
    
    image(this.fondo,0,this.tamY,800,2000);
    this.mover()
  }
  
  mover(){
    this.tamY += 1.5;
    console.log(this.tamY);
    if(this.tamY >= 0){
      this.tamY=0;
    }
  }
  

}
