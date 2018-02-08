colorMode(HSB);
background(0,100,100);

var lines = 0;
	while (lines < 340) {
    stroke(0,200,75);
    strokeWeight(8);
    line(0,lines,340,lines);
    lines = lines + 10;
  }

var lines2 = 5;
	while (lines2 < 340) {
    stroke(0,100,50);
    strokeWeight(0.5);
    line(0,lines2,340,lines2);
    lines2 = lines2 + 5;
  }

fill(0,80,100);
ellipse(170,170,150,150);

var lines = 95;
	while (lines < 245) {
    stroke(60,250,255);
    line(lines,170-sqrt(5625-((170-lines)*(170-lines))),lines,170+sqrt(5625-((170-lines)*(170-lines))));
    lines = lines + 5;
  }
//so that I don't forget!!!
//the first y value is determined by substracting the sqrt(radius^2 - x^2) from 170 (the y-value of the circle's center)
//the x value is in relation to the circle, so you have to subtract lines(the x value of the line drawn) from 170
