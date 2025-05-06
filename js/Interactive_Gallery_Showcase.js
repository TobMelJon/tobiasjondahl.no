// Gallery_showcase.js

// Array for å holde bildene
let images = [];
// Antall bilder du vil vise
const numImages = 1;

// Last inn bildene før oppstart
function preload() {
  // Hvis du ikke endrer filnavnet, må du escape mellomrom:
  images[0] = loadImage('images/Cute%20japanese%20spitz.jpg');
  // Eller, etter å ha endret filnavn til f.eks. cute-japanese-spitz.jpg:
  // images[0] = loadImage('images/cute-japanese-spitz.jpg');
}

function setup() {
  // WebGL‑canvas som fyller hele vinduet
  const canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('galleryContainer');  // Legg den i <div id="galleryContainer">

  noStroke();            // Slå av konturlinje
  textureMode(NORMAL);   // Normaliserte teksturkoordinater
}

function draw() {
  background(30);        // Mørk bakgrunn

  orbitControl();        // Aktiver kun rotasjon (ingen zoom med musehjul)

  // Eksempel: roter hele scenen sakte rundt Y‑aksen
  rotateY(frameCount * 0.001);

  // Her plasserer du bildene på en tenkt sfære senere...
  // Foreløpig tegner vi bare det første bildet som test:
  push();
    // Flytt litt bakover så vi ser planet
    translate(0, 0, 200);
    // Heng bildet som en tekstur på en plane
    texture(images[0]);
    plane(300, 200);     // Bildeplanet, juster størrelse etter behov
  pop();
}

// Håndterer vindusresize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
