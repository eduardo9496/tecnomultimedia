class pantalla{
  constructor(image0){
    this.imagFond= image0;
    this.boton= new boton();
  }

  dibujar(){
    image(this.imagFond,0,0,800,600);
    this.boton.dibujar();
  }
  
  click(){
    this.boton.click();
  }
  
}
