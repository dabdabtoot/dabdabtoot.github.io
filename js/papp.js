// P5
var img;
var img2;
var img3;
var img4;

function preload() {
  img = loadImage('../img/smudge-pattern.png')
  img2 = loadImage('../img/smudge-pattern2.png')
  img3 = loadImage('../img/smudge-pattern3.png')
  img4 = loadImage('../img/smudge-pattern4.png')
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas')
  background(252,247,4);
}

function draw() {

  imageMode(CENTER);
  image(img, mouseX, mouseX);
  image(img2, mouseX, mouseX);
  image(img3, mouseX, mouseY);
  image(img4, mouseX, mouseY);
}


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
