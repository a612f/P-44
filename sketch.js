//Nuestro personaje principal que es un mago (PC) tiene que cruzar un laberinto
//que se encuentra dentro de un bosque encantado y dentrodeeste mismo puede encontrar
//cofres de la suerte que pueden traaer tanto sorpresas buenas como malas
//y el objetivo es cruzar el laberinto y recolectar la mayor cantidad de premios posibles
//el juego lo quierohaceradaptablepara cualquier dispositivo pero primero lo vamos a hacer para pc

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}