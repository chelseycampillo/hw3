colorMode(HSB);
background(0,100,75);

var lines = 0;
	while (lines < 340) {
    stroke(0,100,50);
    strokeWeight(2);
    line(0,lines,340,lines);
    lines = lines + 10;
  }

var lines = 5;
	while (lines < 340) {
    stroke(0,100,30);
    line(0,lines,340,lines);
    lines = lines + 10;
  }

fill(0,100,75);
noStroke();
ellipse(170,170,200,200);

var lines = 70;
	while (lines < 170) {
    stroke(15,100,100);
    strokeWeight(2);
    line(lines,230-lines,lines,230+lines);
    lines = lines + 10;
  }
