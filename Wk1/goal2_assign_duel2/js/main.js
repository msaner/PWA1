/*
NAME: Michael Saner
DATE: 10/30/2013
ASSIGNMENT: Goal 1 Duel 1
*/


//this is a self executing function
(function(){
	console.log("FIGHT!");
	// player names
/*var playerOneName = "Spiderman";
	var playerTwoName = "Batman";
	
	// the players starting health level
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	
	// the max amount of damage per round the player can cause
	var playerOneDamage = 23;
	var playerTwoDamage = 23;
*/
	var playerOne = ["Spiderman", 100, 23]; // 0=name, 1=health, 2=damage
	var playerTwo = ["Batman", 100, 23]; // 0=name, 1=health, 2=damage
	console.log(playerOne + ", player2= " + playerTwo);
	
	// round number of the game
	var round = 0;
	
	// fight function
	function fight(playerOne, playerTwo){
		console.log(playerOne[0], playerTwo[0]);
		alert(playerOne[0] + ":" + playerOne[1] + " *START* " + playerTwo[0] + ":" + playerTwo[1]);
		
		
		// basic "for loop"
		for(var i = 0; i < 10; i++){
			// generate a random number
			
			var minDamage1 = playerOne[2] * .5;
			var minDamage2 = playerTwo[2] * .5;
			var f1 = Math.floor(Math.random() * (playerOne[2] - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (playerTwo[2] - minDamage2) + minDamage2);
			
			// inflicted damage formula
			playerOne[1] -= f1;
			playerTwo[1] -= f2;
			
			console.log(playerOne[0] + ":" + playerOne[1] + "  " + playerTwo[0] + ":" + playerTwo[1]);	
			
			// calls the winnerCheck function
			var result = winnerCheck()
			console.log(result);	
			
			if (result === "no winner"){
				round++;
				alert(playerOne[0] + ":" + playerOne[1] + " *ROUND " + round + " OVER*"  + playerTwo[0] + ":" + playerTwo[1]);
			}else{
				alert(result);
				break; // exit out of the for loop
			};
		};		
	};
	
	// check for a winner
	function winnerCheck(){
		var result = "no winner";
		
		if(playerOne[1] < 1 && playerTwo[1] < 1){
			result = "You Both Die";			
		}else if(playerOne[1] < 1){
			result = playerTwo[0] + " WINS!!!"
		}else if(playerTwo[1] < 1){
			result = playerOne[-] + " WINS!!!"
		}; //end of if, else if, else if
		return result;
		
	};  // end winnerCheck function
	
	// call (aka run) function check. This is where the program starts
	fight(playerOne, playerTwo);

})();

