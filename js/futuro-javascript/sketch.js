let galeria;


let opacidad = 0;

let pasarPaginas = 0;

let movimientoXNSDF;  
let movimientoYNSDF;  
  
let movimientoXSolar;
let movimientoYSolar;
  
let NSDF1opaca1;
let comunismosolar;
let audioParte1;
let bomba1;
let estatua1;
let stalingrado1;
let stalingrado2;
let buda;
let delfin2;
let humano1;
let humano3;
let planeta2;
let soldado;



let fuente4;

let aleteoPrueba = 0;
let bandera1 = true;

let rotacion = 0;
let bandera2 = true;


let misiles;
let frase;
let angel;



function preload() {
  NSDF1opaca1 = loadImage ('js/futuro-javascript/img/NSDF1opaca1.png');
  comunismosolar = loadImage ('js/futuro-javascript/img/solarcomunismo2.png');
  bomba1 = loadImage ('js/futuro-javascript/img/bomba1.jpeg');
  estatua1 = loadImage ('js/futuro-javascript/img/estatua1b.jpeg');
  stalingrado = loadImage ('js/futuro-javascript/img/stalingrado2.jpeg');
  buda = loadImage ('js/futuro-javascript/img/buda1.jpeg');
  luces = loadImage ('js/futuro-javascript/img/luces1.jpeg');
     delfin2 = loadImage ('js/futuro-javascript/img/delfin2.jpeg');
 humano2= loadImage ('js/futuro-javascript/img/humano2.jpeg');
 humano3= loadImage ('js/futuro-javascript/img/humano3.jpeg');
 planeta2= loadImage ('js/futuro-javascript/img/planeta2.jpeg');
 soldado= loadImage ('js/futuro-javascript/img/soldado.jpeg');
  
  
  audioParte1 = loadSound ('js/futuro-javascript/audio/parte1.mp3');
  audioParte2 = loadSound ('js/futuro-javascript/audio/parte2.mp3');
  audioParte3 = loadSound ('js/futuro-javascript/audio/parte3.mp3');
  misiles = loadSound ('js/futuro-javascript/audio/misiles.mp3');
  frase = loadSound ('js/futuro-javascript/audio/frase.mp3')
  angel = loadSound ('js/futuro-javascript/audio/angel.mp3');
  
  //FUENTES
  
      fuente4 = loadFont('js/futuro-javascript/fuentes/fuente4.otf');

  
}



function setup() {
  let canvas = createCanvas(700, 1150);
  canvas.parent('canvasDiv');

  crearGaleria ();  

  
 
}

function draw() {
    
  background(0, 20);
  frameRate (30);
  
  
  
  
//__________________TEXTO E IMAGENES GALERIA_____________________________

  
  fill (255,255, 255);
  
   textAlign(CENTER);
  
 

  if (pasarPaginas < galeria.length) {pasajeGaleria ()
  }  else if (pasarPaginas == 14) {intercambioActivo = true; if (intercambioActivo === true) {intercambio ()}}
  
  
   
  
  //____FINALES POSIBLES DEL INTERCAMBIO____________________________________
  
   if (respuesta1 === true) {respuestaBuena ();                              
}
  else if (respuesta2 === true) {respuestaMala ();                              
}
  else if (respuesta3 === true) {respuestaMala2 ();                             
}
  
  
  
  //_____LLAMADO DE BORRADORES___
  
    
  
  
  if (pasarPaginas == 10 || pasarPaginas ==  11 || pasarPaginas == 14 || pasarPaginas == 15) {
    borrador(); }  

  
  if (pasarPaginas == 12 || pasarPaginas == 13 ) {borradorChico(); }
  
  
     
  
  
  
}