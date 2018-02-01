function chelseyPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 300, 300);
  
  // your code here!
 	fill(0,0,0);
  ellipse(x+150, y+150, 300, 300);
  
  var radius=25;
  	while (radius < 300) {
       noFill();
 			 stroke(150,100,255);
 			 strokeWeight(2);
 			 ellipse(x+150, y+150, radius);
      radius = radius + 25;
    }
  
  noFill();  
  stroke(60,0,75);
  strokeWeight(10);
  arc(x+150,y+150,300);
  	
}

background(255);
chelseyPatch(width-301, height-301); // draw patch at lower-right
