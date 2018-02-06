colorMode(HSB);
background(255);
stroke(0,0,50);

line(0,120,340,120);
line(0,220,340,220);

var lines = 0;
	while (lines < 340) {
    strokeWeight(0.5);
     line(lines,120,lines,220);
			lines = lines + 2.5;
  }
				
line(120,0,120,340);
line(220,0,220,340);

var lines = 0;
	while (lines < 340) {
     strokeWeight(0.5);
		line(120,lines,220,lines);
		lines = lines + 2.5;
}

line(270,0,0,270);
line(410,0,0,410);

var lines = 0;
	while (lines < 273) {
     strokeWeight(0.5);
		line(lines, 270-lines,70+lines,340-lines);
		lines = lines +2.5;
}
