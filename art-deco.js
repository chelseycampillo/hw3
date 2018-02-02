colorMode(HSB);
background(255);

function pattern(startingXlocation) {
  var numberOfSquares = 0 //this is referring to the square within square pattern
	while (numberOfSquares < 32) {
  			noFill();
  	 		rect(startingXlocation+numberOfSquares, 170+numberOfSquares,62-(2*numberOfSquares), 62-(2*numberOfSquares));
   			numberOfSquares = numberOfSquares + 8;
    }
	}
  
  
pattern(0);
pattern(68);
pattern(136);
pattern(204);
pattern(272);
