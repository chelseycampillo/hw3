colorMode(HSB);
background(255);
stroke(0);

var lines = 0;
while (lines < 340) {
    line(lines, 0, lines, 340);
    lines = lines + 10;
  }
