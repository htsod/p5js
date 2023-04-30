var ship;
var flowers = [];
var water = [];
var f_num = 5;
var w_num = 100;
var rc = 0;

function setup() {
  createCanvas(400, 400);
  ship = new Ship();
  for (var i = 0; i < f_num; i++) {
    flowers[i] = new Flower();
  }
  for (var i = 0; i < w_num; i++) {
    water[i] = new Water(ship.x, ship.y, i);
  }
}

function draw() {
  background(80);
  
  for (var i = 0; i < w_num; i++) {
    water[i].rate += 0.1;
    if (water[i].rate < w_num) {
      water[i].update_in(ship.x)      
    } 
    else if (water[i].rate > w_num) {
      water[i].update_out(ship.x);
      water[i].reload(ship.x, ship.y);
      water[i].show();
    } 
    for (var j = 0; j < f_num; j++) {
      d_fw = dist(water[i].x, water[i].y, flowers[j].x, flowers[j].y);
      if (d_fw < 1 && flowers[j].rc < 255) {
        flowers[j].rc += 50;
      }
      flowers[j].edges();
      flowers[j].show();
    }
  }
  for (var j = 0; j < f_num; j++) {
    flowers[j].update(); 
  }
  
  ship.show();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.move(10);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-10);
  }
}