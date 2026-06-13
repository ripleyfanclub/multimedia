let ondaX = 0;
let ondaY = 0;

let posicionTextoY = 0;
let posicionTextoX = 0;


let NSDF1opaca1;
let comunismosolar;


function preload() {
  NSDF1opaca1 = loadImage ('js/futura3-javascript/img/NSDF1opaca1.png');
  comunismosolar = loadImage ('js/futura3-javascript/img/solarcomunismo2.png');
  
}







function setup() {
 let canvas = createCanvas(700, 1150);
   canvas.parent('canvasDiv');

}

function draw() {
  background(0, 10);
  frameRate (10);
  
  
  
//_________________________IMAGENES__________________________________

let movimientoXNSDF;  
let movimientoYNSDF;  
  
let movimientoXSolar;
let movimientoYSolar;
  
let opacidad;

if (mouseIsPressed) {movimientoXNSDF = 0; movimientoYNSDF= 50; fill (0, 0, 0, 100); rect (0, 0, 800, 50); movimientoXSolar = 1090; movimientoYSolar = 50; opacidad = 255} 
  else {movimientoXNSDF= random (0, 20); movimientoYNSDF = random (-100, 100)
movimientoXSolar = random (1050, 1120); movimientoYSolar = random (30, 70); opacidad = 230}  

  
push();

  scale (0.65);
  image (NSDF1opaca1,movimientoXNSDF, movimientoYNSDF);

  
pop ();
  
push ();
  
  tint (255, opacidad)
  scale (0.25);
  image (comunismosolar, movimientoXSolar, movimientoYSolar);

  
pop ();
  
  
  
//___________________________BEZIERS________________________________  

ondaX = random (350, 360);
ondaY = random (500, 600);
  
let trazoBezier;
  
if (mouseIsPressed) {trazoBezier = 0} else { trazoBezier = random (2, 10)}
  
for (i = 0; i < 1200; i += 20) {
  
  noFill ();
  stroke (255, 255, 255, 30);
  strokeWeight(trazoBezier);
  bezier (100, 0, ondaX, ondaY, ondaX, ondaY, 0, random (0, 1200)-i);
  bezier (600, 0, ondaX, ondaY, ondaX, ondaY, 700, random (0, 1200)-i);
  
  
}

  
  
//______________________________________TEXTO_____________________________________

push();
translate (posicionTextoX, posicionTextoY);
stroke (255, 255, 255, 50);
strokeWeight (1);
textAlign(CENTER)
  
for (i = 0; i < 25; i += 1) {
  
text ("nuestra señora del futuro, que cabalga sobre los ardientes vientos del sahel", -100, 950, 500, 200);
text ("未来圣母，乘着萨赫勒地区的烈风", -100, 970, 500, 200);
text ("Богоматерь Будущего, Подательница Ветров Сахеля", -100, 985, 500, 200);
    
}

if (mouseIsPressed) {posicionTextoY = 100; posicionTextoX=200;} else{posicionTextoX= random (0, 700); posicionTextoY = random (50, 500)}
  
pop();


  
  
 
}










 