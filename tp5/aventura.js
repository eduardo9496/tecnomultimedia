class aventura{
  constructor(){
  this.imagenes= imagenes1;
  this.pagSig=0;
  }
 

 dibujar(){
   if(this.pagSig<23){
     image(this.imagenes[this.pagSig],0,0,800,600);
     if(mouseButton === RIGHT){
       this.pagSig++;
     }
   }
 }


  
  
  
  
  
  
  
}//fin aventura
