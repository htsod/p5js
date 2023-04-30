function Ship() {
  this.x = width/2;
  this.y = height-20;
  
  this.show = function() {
    fill(255);
    rect(this.x, this.y, 20, 40);
    
  this.move = function(dir) {
      this.x += dir*5;
  }
    
    
  }
}