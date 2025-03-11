/*
 * ===============[ Min egen kode ]===============
 */
function myCustomFeature() {
  // Her gjør du noe nytt som du har funnet på selv
}

/*
 * ===============[ Kode fra "Aim" (CC BY-NC-SA) ]===============
 * Original: "Aim" av p5.js Contributors og The Processing Foundation
 */
//Aim by p5.js Contributors and the Processing Foundation is licensed under CC BY-NC-SA 4.0.
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  // Set angle mode so that atan2() returns angles in degrees
  angleMode(DEGREES);
  describe('Two eyes that follow the cursor.');
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
}