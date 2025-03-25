/*
 * ===============[ Min egen kode ]===============
 */
let leftTopRectY = -37;
let leftBottomRectY = 37;
let rightTopRectX = -37;
let rightBottomRectX = 37;

let eyelidSpeed = 0.4;

function myCustomFeature() {
  let leftX = 150;
  let leftY = 200;
  let leftEyeSize = 50;
  let leftEyeRadius = leftEyeSize / 2;

  let rightX = 250;
  let rightY = 200;
  let rightEyeSize = 50;
  let rightEyeRadius = rightEyeSize / 2;

  // VENSTRE ØYE
  let distLeft = dist(mouseX, mouseY, leftX, leftY);
  if (distLeft < leftEyeRadius) { // Hvis musen er innenfor sirkelens radius
    leftTopRectY = lerp(leftTopRectY, -12, eyelidSpeed); //Beveg V.top rect mot -12 fra 0 (midt i øyet)
    leftBottomRectY = lerp(leftBottomRectY, 12, eyelidSpeed); //Beveg V.bot rect mot 12 fra 0 (midt i øyet)
  } else{
    leftTopRectY = lerp(leftTopRectY, -37, eyelidSpeed); //Når mus ikke er på øye, beveg rect tilbake til opprinnelig posisjon
    leftBottomRectY =lerp(leftBottomRectY, 37, eyelidSpeed); // -- II --
  }
  push(); // Gjør følgende
    translate(leftX, leftY); //flytter (0,0) til (0,0) i venstre øye, alt etter vil skje relativt til venstre øyets sentrum
    fill(0); // svart fyll farge
    noStroke(); // slår av outline (ingen kantlinje)
    rectMode(CENTER); //seter x,y kordinat for rektangel i midten av rektangelet
    rect(0, leftTopRectY, leftEyeSize, leftEyeSize / 2); //tegner rektangel over øyet
    rect(0, leftBottomRectY, leftEyeSize, leftEyeSize / 2); //tegner rektangel under øyet
  pop(); //tilbakestiller til slik det var før push(), basically avslutter loop/func


  //HØYRE ØYE
  let distRight = dist(mouseX, mouseY, rightX, rightY);
  if (distRight < rightEyeRadius) {
    rightTopRectX = lerp(rightTopRectX, -12, eyelidSpeed);
    rightBottomRectX = lerp(rightBottomRectX, 12, eyelidSpeed);
  } else{
    rightTopRectX = lerp(rightTopRectX, -37, eyelidSpeed);
    rightBottomRectX = lerp(rightBottomRectX, 37, eyelidSpeed);
  }
  push();
    translate(rightX, rightY);
    fill(0); //svart farge
    noStroke();
    rectMode(CENTER);
    rect(0, rightTopRectX, rightEyeSize, rightEyeSize / 2);
    rect(0, rightBottomRectX, leftEyeSize, leftEyeSize / 2);
  pop();
}

/*
 * ===============[ Kode fra "Aim" (CC BY-NC-SA) ]===============
 * Original: "Aim" av p5.js Contributors og The Processing Foundation
 */
//Aim by p5.js Contributors and the Processing Foundation is licensed under CC BY-NC-SA 4.0.
function setup() {
  createCanvas(400, 400).parent('canvasContainer'); // Calls the figure drawn "canvasContainer" so that i can place within HTML
  colorMode(HSB);
  angleMode(DEGREES); // Set angle mode so that atan2() returns angles in degrees
  describe('Two eyes that follow the cursor, with eyelids that close when hovered');
}
function draw() {
  background(0);
  // Draw left eye
  let leftX = 150;
  let leftY = 200;
  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
  push();
    translate(leftX, leftY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(leftAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
  pop();
  // Draw right eye
  let rightX = 250;
  let rightY = 200;
  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);
  push();
    translate(rightX, rightY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(rightAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
  pop();

  myCustomFeature();
}