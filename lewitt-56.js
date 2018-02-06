colorMode(HSB);
background(255);
stroke(0,0,50);

//diagonal lines with negative slope in bottom right quadrant
var lines = 340;
while (lines > 0) {
	line(lines, 170, lines + 50, height);
	lines = lines - 10;
}

fill(255);
rect(0,170,170,170);

//vertical lines seen in entire design
var lines = 0;
while (lines <340) {
  line(lines,0,lines,340);
  lines = lines + 5;
}

//horizontal lines in top right quadrant
var lines = 0;
while (lines < 170) {
  line(170,lines,340,lines);
  lines = lines + 5;
}

//horizontal lines in bottom half of design
var lines = 170;
while (lines < 340) {
  line(0,lines,340,lines);
  lines = lines + 5;
}


//diagonal lines with positive slope
var lines = 0;
while (lines < 400) {
  line(lines, 170,lines-50,height);
  lines = lines + 10;
}
