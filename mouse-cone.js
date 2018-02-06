colorMode(HSB);
background(255);
stroke(0);

var times = 0;
	while (times < 400) {
    line(170,0,mouseX,mouseY);
    times = times + 5
  }
