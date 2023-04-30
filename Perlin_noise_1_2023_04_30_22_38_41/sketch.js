var xoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  var noival = map(noise(xoff), 0, 1, 0, 100);
  // var noival = noise(xoff) * 100
  var rdval = random(width);
  
  ellipse(noival, 300, 24, 24);
  ellipse(rdval, 100, 24, 24);
  
    xoff += 0.01;
}