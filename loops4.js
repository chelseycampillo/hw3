colorMode(HSB);
background(255);
stroke(0);

var times = 0;
	while (times < 180) {
    line(170,0,times,340);
    line(170,0,340-times,340);
    times = times + 10
  }
