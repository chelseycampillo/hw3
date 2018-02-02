colorMode(HSB);
background(255);
stroke(0);

var lines = 0;
	while (lines < 170) {
    line(170-lines,lines,170+lines,lines);
    lines = lines + 10
  }

var lines = 0;
	while (lines < 180) {
    line(170-lines, 340-lines, 170+lines, 340-lines);
    lines = lines + 10
  }
