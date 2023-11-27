let objAventura;
let imagenes1 =[23];
//let imagenes2 =[14];
//let imagenes3 =[10];
let image0;

function preload(){
  //image0= loadImage("data/cap0.jpg");
  for(let i=0; i<23 ; i++){
    imagenes1[i]=loadImage("data/cap"+i+".jpg");
  }
  //for(let i=0; i<14 ; i++){
  //  imagenes2[i]=loadImage("data/f2cap"+i+".jpg")
  //}
  //for(let i=0; i<10 ; i++){
  //  imagenes3[i]=loadImage("data/f3cap"+i+".jpg")
  //}

}


function setup() {
  createCanvas(800,600);
  this.objAventura= new aventura();
}


function draw() {
  this.objAventura.dibujar();
}

function mousePressed(){

}
