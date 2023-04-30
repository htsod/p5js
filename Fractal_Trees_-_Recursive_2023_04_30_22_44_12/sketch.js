var angle = 0;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  translate(200, height);
  stroke(255);
  branch(100);

}


function branch(len) {
  line(0, 0, 0, -len)
  translate(0, -len)
  
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67); 
    pop();
  }


  
}