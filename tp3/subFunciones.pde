void DibujarBotonesPortada( PFont fuente ){
  fill(255,218,3,150);
  ellipse(100,160,100,100);
  ellipse(500,160,100,100); 
  fill(0);
  textFont(fuente,22);
  text("Inicio",468,168);
  text("Creditos",52,168);
}
void DibujarBotonAtras(PFont fuente){
  fill(255,218,3,150);
  ellipse(300,500,80,80);
  fill(0);
  textFont(fuente,20);
  text("Atras",273,505);
}
void MostrarDatos(){
  fill(255, 217, 0);
  rect(20, 200,180, 30);
  fill(0);
  textSize(18);
  text("Datos De Alumno", 30, 220);
  ellipse(28, 243, 10, 10);
  text("Nombre, Apellido:", 35, 250);
  text("Eduardo Medrano Ticona", 35, 270);
  ellipse(28, 300, 10, 10);
  text("Legajo:", 35, 305);
  text("93096/6", 35, 327);
  fill(255, 217, 0);
  rect(400,200, 150, 30);
  fill(0);
  text("Autor",435,220);
  ellipse(400,243,10,10);
  text("Nombre, Apellido:", 410, 250);
  text("Hans Christian Andersen",360, 270);
  ellipse(400, 300, 10, 10);
  text("Nacimiento:", 410, 305);
  text("2 de abril de 1805", 420, 327);
}
