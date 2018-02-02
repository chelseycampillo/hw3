colorMode(HSB);
background(210,50,255);

function draw() {
  fill(0,100,255);
	stroke(0);
	strokeWeight(5);
	ellipse(mouseX, mouseY, 50, 50);
}

function mouseMoved() {
	background(210,50,255);
}
