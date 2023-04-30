var grid;
var next;
var D_A = 1;
var D_B = 0.5;
var feed = 0.055;
var react = 0.062;
var dt = 1;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  grid = [];
  next = [];
  for (var x = 0; x < width; x++) {
    grid[x] = [];
    next[x] = [];
    for (var y = 0; y < height; y++) {
      grid[x][y] = {a: 1, b: 0};
      next[x][y] = {a: 1, b: 0};
    }
  }
  
  for (var i = 190; i < 210; i++) {
    for (var j = 190; j < 210; j++) {
      grid[i][j].b = 1;
    }
  }

}

function draw() {
  background(51);
  

  
  for (var x = 1; x < width-1; x++) {
    for (var y = 1; y < height-1; y++) {
      var a = grid[x][y].a;
      var b = grid[x][y].b;
      next[x][y].a = a + 
        (D_A*laplaceA(x, y) - a*b*b + feed*(1-a)) * dt;
      next[x][y].b = b + 
        (D_B*laplaceB(x, y) + a*b*b - (react+feed)*b) * dt;
      
      next[x][y].a = constrain(next[x][y].a, 0, 1); 
      next[x][y].b = constrain(next[x][y].b, 0, 1); 
    }
  }
  
  
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var c = color(255, 0, 100);
      var pix = (x + y * width) * 4;
      pixels[pix + 0] = floor((next[x][y].a-next[x][y].b) * 255);
      pixels[pix + 1] = floor((next[x][y].a-next[x][y].b) * 255);
      pixels[pix + 2] = floor((next[x][y].a-next[x][y].b) * 255);
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  swap();
  
}


function laplaceB(x, y) {
  var sumA = 0;
  
  sumA += grid[x][y].b * -1;
  sumA += grid[x+1][y].b * 0.2;
  sumA += grid[x][y+1].b * 0.2;
  sumA += grid[x-1][y].b * 0.2;
  sumA += grid[x][y-1].b * 0.2;
  sumA += grid[x+1][y+1].b * 0.05;
  sumA += grid[x+1][y-1].b * 0.05;
  sumA += grid[x-1][y+1].b * 0.05;
  sumA += grid[x-1][y-1].b * 0.05;
  
  return sumA;
 
}

function laplaceA(x, y) {
  var sumB = 0;
  
  sumB += grid[x][y].a * -1;
  sumB += grid[x+1][y].a * 0.2;
  sumB += grid[x][y+1].a * 0.2;
  sumB += grid[x-1][y].a * 0.2;
  sumB += grid[x][y-1].a * 0.2;
  sumB += grid[x+1][y+1].a * 0.05;
  sumB += grid[x+1][y-1].a * 0.05;
  sumB += grid[x-1][y+1].a * 0.05;
  sumB += grid[x-1][y-1].a * 0.05;
  
  return sumB;
  
}

function swap() {
  var temp = grid;
  grid = next;
  next = temp;
}