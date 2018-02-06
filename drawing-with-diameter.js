function setup() { 
  createCanvas(400, 400);
  colorMode(HSB);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(30, 100, 100);
  } else if (key == 'G') {
    fill(150, 150, 75);
  } else if (key == 'B') {
    fill(210, 50, 255); 
  }
  	else if (key == 'P') {
    fill(330,150,100);
  }
  	else if (key == 'D') {
    fill(240,100,100);
  }
  	else if (key == 'M') {
    fill(270,50,200);
  }
  	else if (key == '1') {
    diameter = 5;
  }
  	else if (key == '2') {
    diameter = 15;
  }
  	else if (key == '3') {
    diameter = 35;
  }
}
