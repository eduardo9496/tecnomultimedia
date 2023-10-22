class Juego{
  constructor(posX,posY){
    this.laguna = new Laguna() ;
    this.patito= new Patito();
    this.patosmadera= []; 
    for(let i=0; i<100 ; i++){
      this.patosmadera[i]= new Patoenemigo(random(50,width-50),random(-2400,400));
    }
    //this.patodemadera= new patodemadera();
    //this.contador = new Contador();
    //this.timer = new Timer();
   
    //this.cantidadMedusas = 100;
    
  //  for(let i=0; i<this.cantidadMedusas; i++){
  //    this.medusas[i] = new Medusa();
  //  }
  }
  
  dibujar(){
    this.laguna.dibujar();
    this.patito.dibujar();
    for(let i=0; i<100 ; i++){
      this.patosmadera[i].dibujar();
    }
    //this.contador.dibujar();
    //this.timer.dibujar();
  }
  teclaDisparo(keyCode){
    this.patito.teclaDisparo(keyCode);
  }
 
  //iniciar(){
  //}
  
  //crearPatito(){
  //}
  
  // crearPatomadera(){
  //}
  
  // patitoLlego(){
  //}
  
}
