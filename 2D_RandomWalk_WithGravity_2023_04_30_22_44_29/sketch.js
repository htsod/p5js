let num = 5;
let w_array = [];
let fr = 30;
const G = 5;
let v_upper = 3;
let v_lower = -3;
let m = 1;
let stp = 3;
let bound = 50;
let b = 0.01;

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < num; i++) {
    w_array[i] = new walker();
  }

//   for (var i = 0; i < num; i++) {
//     w_array[i].get_acl(w_array);
//   }
  frameRate(fr);
  background(255);
  
}

function draw() {
  for (var i = 0; i < num; i++) {
    w_array[i].get_acl(w_array);
    w_array[i].limit_vel();
    w_array[i].friction();
    w_array[i].randomwalk();
    w_array[i].gravity();
    w_array[i].edges();
    w_array[i].show();
    w_array[i].update();
  }
}

// function separation(obj_1, obj_2) {
//   x_sep = Math.abs(obj_1.pos.x - obj_2.pos.x);
//   y_sep = Math.abs(obj_1.pos.y - obj_2.pos.y);
//   return Math.pow(Math.pow(y_sep, 2) + Math.pow(x_sep, 2), 0.5);
// }

// function unit_vec(obj_1, obj_2) {
//   dist_away = separation(obj_1, obj_2);
//   if (dist_away != 0) {
//     x_sep_dir = (obj_2.pos.x - obj_1.pos.x) / dist_away;
//     y_sep_dir = (obj_2.pos.y - obj_1.pos.y) / dist_away;
//     dir_vec = createVector(x_sep_dir, y_sep_dir);
//   }
//   else {
//     dir_vec = createVector(0, 0);
//   }
//   return dir_vec;
// }

walker = function() {
  this.pos = createVector(random(width/2-bound, width/2+bound), random(height/2-bound, height/2+bound));
  this.prevPos = this.pos.copy();
  this.step = stp;
  this.angle = 0;
  this.vel = createVector(0, 0);
  this.acl = createVector(0, 0);
  this.mass = m;
  this.rcolor = random(255);
  this.gcolor = random(255);
  this.bcolor = random(255);
  
  this.get_acl = function(other) {
    this.acl.set(0, 0);
    for (i = 0; i < num; i++) {
      distance = p5.Vector.dist(this.pos, other[i].pos);
      if (distance > 1) {
        direction = p5.Vector.normalize(p5.Vector.sub(other[i].pos, this.pos));
        constant = G * other[i].mass / Math.pow(distance, 2);
        a_g = direction.mult(constant);
        this.acl.add(a_g)
      }
    }
  }
  
  this.limit_vel = function() {
    this.vel = this.vel.add(this.acl);
    v_x = constrain(this.vel.x, v_lower, v_upper);
    v_y = constrain(this.vel.y, v_lower, v_upper);
    this.vel.set(v_x, v_y);
  }
  
  this.friction = function() {
    frict = -b*this.vel.mult(this.vel);
    this.acl.add(frict);
    
  }
  
  this.randomwalk = function() {
    this.angle = random(0, TWO_PI);
    this.pos.x += this.step * cos(this.angle);
    this.pos.y += this.step * sin(this.angle);
  }
  
  this.gravity = function() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
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