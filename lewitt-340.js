colorMode(HSB);
background(53,255,245);

var lines = 0;
	while (lines < 340) {
    stroke(0,100,75);
    line(0,lines,340,lines);
    lines = lines + 7;
  }

fill(53,255,255);
stroke(15,100,0);
rect(95,95,150,150);

var lines = 95;
	while (lines < 245) {
    stroke(15,100,0);
    line(lines,96,lines,245);
    lines = lines + 5;
  }
