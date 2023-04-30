function Flower() {
  this.x = random(width);
  this.y = random(-5, -10);
  this.vel = createVector(random(-1, 1), random(1));
  this.acl = createVector(0, 0.01);
  this.rc = 0;
  
  
  this.update = function() {
    this.x += this.vel.x;
    this.y += this.vel.y;
    this.vel.add(this.acl);
  }
  
  this.edges = function() {
    if (this.x > width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = random(-5, -10);
      this.vel = createVector(random(-1, 1), random(1));
    }
    
  }
  
  this.show = function() {
    fill(this.rc, 0, 0);
    ellipse(this.x, this.y, 20, 20);
  }
  
}