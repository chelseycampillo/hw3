colorMode(HSB);
background(0);

for (var x=0; x <= 310; x+= 20) {
  for (var y=0; y<= 310;y+= 20) {
    fill(255);
    noStroke();
    ellipse(x+20,y+20,15,15);
  }
}
