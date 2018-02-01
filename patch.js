
function chelseyPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 300, 300);
  
  // your code here!
 	fill(0,0,0);
  ellipse(x+150, y+150, 300, 300);
  
  var radius=0;
  	while (radius < 300) {
      colorMode(HSB); 
      noFill();
 			 stroke(210,75,200);
 			 strokeWeight(2);
 			 ellipse(x+150, y+150, radius);
      radius = radius + 25;
    }
  
 var radius2 = 270;
  while (radius2 > 0) {
    noFill();
    stroke(0);
    strokeWeight(10);
    ellipse (x+150, y+150, radius2);
    radius2 = radius2-20;
  }
  	
}

background(255);
chelseyPatch(0, 0); // draw patch at upper-left

background(255);
chelseyPatch(width-301, height-301); // draw patch at lower-right
