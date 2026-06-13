let extra2;

let movimiento = 0;

function preload() {

extra2 = loadImage ("js/futura1-javascript/otrasimg/columna1.jpg");
  
  
}

function setup() {
  let canvas = createCanvas(365, 555);
    canvas.parent('canvasDiv');

}

function draw() {
  background(0, 30);
  
  
  frameRate (10);
  
   
//NUESTRA SEÑORA DEL FUTURO NUESTRA SEÑORA DEL FUTURO NUESTRA SEÑORA DEL FUTURO
    
 for (var i = 0; i < 160; i += 25) { 
  
  push ();
  tint (255, 0, 0, 100)

  image (extra2, random(0, 20)+i, 0+i, 60+(i*0.45), 250+(i*0.45))
  pop ();
      
   }
  
  

  
// EXTRAS  EXTRAS EXTRAS  EXTRAS EXTRAS EXTRAS EXTRAS
  
  
  for (var i = 0; i < 100; i += 1) { 
    
  push();
  noFill ();
  stroke (255, 0, 0, 10);
  strokeWeight (random (1, 5));
  bezier(0+i, 0+i, random (420, 150), random (100, 150), random (300, 400), random   (20, 100), random (200, 240)+i, random (400, 450)+i);//arriba
  bezier(0+i, 0+i, random (20), random (420, 150), random (20, 100), random   (300, 400), random (200, 240)+i, random (400, 450)+i);//abajo
  pop();
      
   }
  
  

  
  
}