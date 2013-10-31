/*
NAME: Michael Saner
DATE: 10/30/2013
ASSIGNMENT: Goal 1 Duel 1
*/


//this is a self executing function
(function(){
	console.log("FIGHT!");
	// player names
	var playerOneName = "Spiderman";
	var playerTwoName = "Batman";
	
	// the players starting health level
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	
	// the max amount of damage per round the player can cause
	var playerOneDamage = 23;
	var playerTwoDamage = 23;
	
	// round number of the game
	var round = 0;
	
	// fight function
	function fight(){
		alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);
		
		
		// basic "for loop"
		for(var i = 0; i < 10; i++){
			// generate a random number
			
			var minDamage1 = playerOneDamage * .5;
			var minDamage2 = playerTwoDamage * .5;
			var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);
			
			// inflicted damage formula
			playerOneHealth -= f1;
			playerTwoHealth -= f2;
			
			console.log(playerOneName + ":" + playerOneHealth + "  " + playerTwoName + ":" + playerTwoHealth);	
			
			// calls the winnerCheck function
			var result = winnerCheck()
			console.log(result);	
			
			if (result === "no winner"){
				round++;
				alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER*"  + playerTwoName + ":" + playerTwoHealth);
			}else{
				alert(result);
				break; // exit out of the for loop
			};
		};		
	};
	
	// check for a winner
	function winnerCheck(){
		var result = "no winner";
		
		if(playerOneHealth < 1 && playerTwoHealth < 1){
			result = "You Both Die";			
		}else if(playerOneHealth < 1){
			result = playerTwoName + " WINS!!!"
		}else if(playerTwoHealth < 1){
			result = playerOneName + " WINS!!!"
		}; //end of if, else if, else if
		return result;
		
	};  // end winnerCheck function
	
	// call (aka run) function check. This is where the program starts
	fight();

})();

