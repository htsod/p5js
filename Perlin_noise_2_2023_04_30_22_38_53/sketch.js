// var xoff = 0;
// var yoff = 1000;
var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(0);
  stroke(255);
  noFill();
  beginShape();
  var yoff = start;
  for (var x = 0; x < width; x++){
    // var y = random(height)
    var y = noise(yoff) * height;
    stroke(255);
    vertex(x, y);
    
    yoff += inc;
    
  }
  endShape();
  start += inc;
// noLoop();
//   var noival_x = map(noise(xoff), 0, 1, 0, width);
//   var noival_y = map(noise(yoff), 0, 1, 0, height);
  
//   ellipse(noival_x, noival_y, 24, 24);
  
//   xoff += 0.02;
//   yoff += 0.02;
  
}