colorMode(HSB);
background(255);
stroke(0);

	var lines = 0;
	while (lines < 340) {
    line(0, lines, 340, lines);
    lines = lines + 10;
  }
