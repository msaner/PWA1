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
	var round = 1;
	
	// fight function
	function fight(){
		
		// calls the winnerCheck function
		winnerCheck()
	};
	
	// check for a winner
	function winnerCheck(){
		
	};
	
	// call (aka run) function check. This is where the program starts
	fight();

})();

