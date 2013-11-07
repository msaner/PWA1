/*
NAME: Michael Saner
DATE: 11/6/2013
ASSIGNMENT: Goal 4 Duel 3
*/


//this is a self executing function
(function(){
	console.log("FIGHT!");
	// player names
/*
	var playerOne = ["Spiderman", 100, 23]; // 0=name, 1=health, 2=damage
	var playerTwo = ["Batman", 100, 23]; // 0=name, 1=health, 2=damage
*/

	var playerOne = {name:'Spiderman', health:100, damage:23};
	var playerTwo = {name:'Batman', health:100, damage:23};
	console.log(playerOne.name + ", player2= " + playerTwo.name);
	
	// round number of the game
	var round = 0;
	
	// fight function
	function fight(playerOne, playerTwo){
		console.log('pass fight function arguments: ' + playerOne.name, playerTwo.name);
		alert(playerOne.name + ":" + playerOne.health + " *START* " + playerTwo.name + ":" + playerTwo.health);
		
		
		// basic "for loop"
		for(var i = 0; i < 10; i++){
			// generate a random number
			
			var minDamage1 = playerOne.damage * .5;
			var minDamage2 = playerTwo.damage * .5;
			var f1 = Math.floor(Math.random() * (playerOne.damage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (playerTwo.damage - minDamage2) + minDamage2);
			
			// inflicted damage formula
			playerOne.health-= f1;
			playerTwo.health -= f2;
			
			console.log(playerOne.name + ":" + playerOne.health + "  " + playerTwo.name + ":" + playerTwo.health);	
			
			// calls the winnerCheck function
			var result = winnerCheck()
			console.log(result);	
			
			if (result === "no winner"){
				round++;
				alert(playerOne.name + ":" + playerOne.health + " *ROUND " + round + " OVER*"  + playerTwo.name + ":" + playerTwo.health);
			}else{
				alert(result);
				break; // exit out of the for loop
			};
		};		
	};
	
	// check for a winner
	function winnerCheck(){
		var result = "no winner";
		
		if(playerOne.health < 1 && playerTwo.health < 1){
			result = "You Both Die";			
		}else if(playerOne.health < 1){
			result = playerTwo.name + " WINS!!!"
		}else if(playerTwo.health < 1){
			result = playerOne.name + " WINS!!!"
		}; //end of if, else if, else if
		return result;
		
	};  // end winnerCheck function
	
	// call (aka run) function check. This is where the program starts
	fight(playerOne, playerTwo);

})();

