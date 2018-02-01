colorMode(HSB);
background(255);
stroke(0);

var lines = 0;
	while (lines < 170) {
    line(lines,0,lines,2*lines+10);
    lines = lines + 5
  }

var lines = 0;
	while (lines < 180) {
    line(170+lines, 0, 170+lines, 340);
    lines = lines + 5;
  }
