let num = 10;
let w_array = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < num; i++) {
    w_array[i] = new walker();
  }
  background(255);
}

function draw() {
  for (var i = 0; i < num; i++) {
    w_array[i].walk();
    w_array[i].edges();
    w_array[i].show();
    w_array[i].update();
  }
}

walker = function() {
  this.pos = createVector(random(width), random(height));
  this.prevPos = this.pos.copy()
  this.vel = 2;
  this.angle = 0;
  this.rcolor = random(255);
  this.gcolor = random(255);
  this.bcolor = random(255);
  
  this.walk = function() {
    this.angle = random(0, TWO_PI);
    this.pos.x += this.vel * cos(this.angle);
    this.pos.y += this.vel * sin(this.angle);
  }
  
  this.update = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
  
  this.show = function() {
    strokeWeight(2);
    stroke(this.rcolor, this.gcolor, this.bcolor, 50);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  }
  
  this.edges = function() {
      if (this.pos.x > width) {
        this.pos.x = 0;
        this.update();
      }
      if (this.pos.x < 0) {
        this.pos.x = width;
        this.update();
      }
      if (this.pos.y > height) {
        this.pos.y = 0;
        this.update();
      }
      if (this.pos.y < 0) {
        this.pos.y = height;
        this.update();
      }   
    }
}