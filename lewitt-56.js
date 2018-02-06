colorMode(HSB);
background(255);
stroke(0,0,50);

line(170,0,170,340);
line(0,170,340,170);

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
var lines = 0
while (lines < 340) {
  line(lines, 170,lines-50,height);
  lines = lines + 10;
}
