function Water(x, y, rate) {
  this.x = x;
  this.y = y;
  this.vel = -2;
  this.rate = rate;

  
  this.update_in = function(x) {
    this.x = x;
    
  }
  
  this.reload = function(x) {
    if (this.y < 0) {
      this.rate = 0;
      this.x = x;
      this.y = y;
    }
  }
  
  this.update_out = function() {
    this.y += this.vel;
  }
  
  this.show = function() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, 5, 10);
  }
  
  
  
}