$(document).ready(function(){
	
// The variable that we have for this game  are as follows, and they need to be set to zero for initializing the game//
    
    var win = 0;
	var loss = 0;
	var totalScore = 0;
	



//Upon start, a random number is generated between 19 and 120.  This number is fixed to the html, this is the number of the Total that
// the player needs to hit.

	var random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;  
    $("#boxRandom").html(random);
    
 //The following set of functions will  generate a random number between 1-12 when the corresponding Crystal is clicked.

// We have four Crystals 
// 1- Purple
// 2- Red
// 3- White
// 4- Green 

// Math.floor(Math.random()*(max-min+1)+min); the combination of Math.Floor & MAth.Random makes sure the number is rounded off and we dont receive decimals.

	var randomPurple    = Math.floor(Math.random() * (12 - 1 + 1)) + 1;  
    var randomRed       = Math.floor(Math.random() * (12 - 1 + 1)) + 1;  
	var randomWhite     = Math.floor(Math.random() * (12 - 1 + 1)) + 1;  
	var randomGreen     = Math.floor(Math.random() * (12 - 1 + 1)) + 1; 
	

    // Below are the on click functions, ParsInt is a way of converting Strings to numbers.

	    function addToScorePurple() {
  			var numberToAdd     = parseInt(randomPurple);
  			var currentScore    = parseInt(totalScore);
 			totalScore          = randomPurple + currentScore;
		}

		function addToScoreRed() {
  			var numberToAdd     = parseInt(randomRed);
  			var currentScore    = parseInt(totalScore);
 			totalScore          = numberToAdd + parseInt(currentScore);
		}

		function addToScoreWhite() {
  			var numberToAdd     = parseInt(randomWhite);
  			var currentScore    = parseInt(totalScore);
 			totalScore          = numberToAdd + parseInt(currentScore);
		}

		function addToScoreGreen() {
  			var numberToAdd     = parseInt(randomGreen);
  			var currentScore    = parseInt(totalScore);
             totalScore         = numberToAdd + parseInt(currentScore);
		}

        // The reset function is defined so that everytime the user wins or losses, 
        // Reset function needs to do the following:
        // 1- Get a new Target Score
        // 2- Assign new value to the Crystals
        // 3- Set the user score to Zero

        function reset() {
            //1
            random          = Math.floor(Math.random() * (120 - 19 + 1)) + 19;  
             $("#boxRandom").html(random);
            
            //2
            randomPurple    = Math.floor(Math.random() * (12 - 1 + 1)) + 1; 
            randomRed       = Math.floor(Math.random() * (12 - 1 + 1)) + 1;  
            randomWhite     = Math.floor(Math.random() * (12 - 1 + 1)) + 1;  
            randomGreen     = Math.floor(Math.random() * (12 - 1 + 1)) + 1; 
            //3
            totalScore      = 0;
            $("#totalBox").html(totalScore);
            currentScore    = totalScore
   
        }       

         // when the Purple Crystal is clicked the function addtoScorePurple is executed and the value is added to total score. Same applies to the other crystals.

	    $("#purple").on("click", function() {
		    addToScorePurple();
		    $("#totalBox").html(totalScore);
		    function keepPlaying() {
			    var playerNum = parseInt(totalScore);
			    var targetNum = parseInt(random);
			    if (playerNum === targetNum) {
			    alert("You win! Press 'ok' to play again.");
			    win++
			    $("#winBox").html(win);
			    reset();

			    } 
			    else if (playerNum > targetNum) {
				alert("You lose! Press 'ok' to play again.");
				loss++
				$("#lossBox").html(loss);
				reset();
			    } 
            }
		    keepPlaying();
	    });  
   
    // when the Red Crystal is clicked the function addtoScorePurple is executed and the value is added to total score. Same applies to the other crystals.

   	$("#red").on("click", function() {
		addToScoreRed();
		$("#totalBox").html(totalScore);
		function keepPlaying() {
			var playerNum = parseInt(totalScore);
			var targetNum = parseInt(random);
			if (playerNum === targetNum) {
			    alert("You win! Press 'ok' to play again.");
			    win++
			    $("#winBox").html(win);
			    reset();
			} 
			else if (playerNum > targetNum) {
				alert("You lose! Press 'ok' to play again.");
				loss++
				$("#lossBox").html(loss);
				reset();
			} 
		}
		keepPlaying();
	});  
        
        
    // when the White Crystal is clicked the function addtoScorePurple is executed and the value is added to total score. Same applies to the other crystals.
   	$("#white").on("click", function() {
   	  	addToScoreWhite();
		$("#totalBox").html(totalScore);
		function keepPlaying() {
			var playerNum = parseInt(totalScore);
			var targetNum = parseInt(random);
			if (playerNum === targetNum) {
			    alert("You win! Press 'ok' to play again.");
			    win++
			    $("#winBox").html(win);
			    reset();
			} 
			else if (playerNum > targetNum) {
				alert("You lose! Press 'ok' to play again.");
				loss++
				$("#lossBox").html(loss);
				reset();
			} 
		}
		keepPlaying();
	});  
  
    // when the Green Crystal is clicked the function addtoScorePurple is executed and the value is added to total score. Same applies to the other crystals.    	
   	$("#green").on("click", function() {
        addToScoreGreen();
		$("#totalBox").html(totalScore);
		function keepPlaying() {
			var playerNum = parseInt(totalScore);
			var targetNum = parseInt(random);
			if (playerNum === targetNum) {
			    alert("You win! Press 'ok' to play again.");
			    win++
			    $("#winBox").html(win);
			    reset();
			} 
			else if (playerNum > targetNum) {
				alert("You lose! Press 'ok' to play again.");
				loss++
				$("#lossBox").html(loss);
				reset();
			} 
		}
		keepPlaying();
    });  

});
	














