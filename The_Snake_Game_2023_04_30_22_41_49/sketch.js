let s;
let scl = 20;
let food;
let obstacle = [];
let difficulty = 20;


function setup() {
  createCanvas(20*scl, 20*scl);
  s = new Snake();
  frameRate(10);
  pickLocation();

 
}

function pickLocation() {
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(100);
  s.crash();
  s.update();
  s.show();
  
  if (s.eat(food)) {
    pickLocation();
  }
  
  
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  
  
}

function keyPressed() {
  if (keyCode === UP_ARROW && s.yspeed <= 0 && s.color == 255) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && s.yspeed >= 0 && s.color == 255) {
    s.dir(0, 1 && s.color == 255);
  }
  if (keyCode === RIGHT_ARROW && s.xspeed >= 0 && s.color == 255) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && s.xspeed <= 0 && s.color == 255) {
    s.dir(-1, 0);
  }
  
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.color = 255;
  
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.update = function() {
    
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }

    this.tail[this.total - 1] = createVector(this.x, this.y)

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;
    
    this.x = constrain(this.x, 0, width-scl)
    this.y = constrain(this.y, 0, height-scl)
    

  }
  
  this.show = function() {
    for (var i = 0; i < this.total; i++) {
      fill(this.color);
      rect(this.tail[i].x, this.tail[i].y, scl, scl);    
    }
    
    fill(this.color);
    rect(this.x, this.y, scl, scl);
  }
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
  
    if (d < 1) {
      this.total++;
      return true;
    } else {
    return false;
    }
  }
  
  this.crash = function(array) {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
        this.xspeed = 0;
        this.yspeed = 0;
        this.color = 0;
        
      }
    }
        }


  
} 

