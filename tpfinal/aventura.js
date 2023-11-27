class aventura {
  constructor(){
  this.pantallas=[];
  
  for(let i=0 ; i<23 ; i++){
    this.pantallas[i]= new pantalla(imagenes1[i]);
  }
  //this.pantallas[1]= new pantalla(imag1)
  //this.pantallas[2]= new pantalla(imag2)
  //this.pantallas[3]= new pantalla(imag3)
  //this.pantallas[4]= new pantalla(imag4)
  //this.pantallas[5]= new pantalla(imag5)
  //this.pantallas[6]= new pantalla(imag6)
  //this.pantallas[7]= new pantalla(imag7)
  this.pantallaActual= 0;
  }

  dibujar(){
    this.pantallas[this.pantallaActual].dibujar();
  }

  click(){
    this.pantallas[this.pantallaActual].click();
  }
}
