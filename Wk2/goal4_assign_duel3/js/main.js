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
	var fighters.players[0] = ["Spiderman", 100, 23]; // 0=name, 1=health, 2=damage
	var fighters.players[1] = ["Batman", 100, 23]; // 0=name, 1=health, 2=damage
*/

	var fighters = { 
		players:[
			{name:'Spiderman', health:100, damage:23},
			{name:'Batman', health:100, damage:23}
		]
	};
	console.log("should be spiderman " + fighters.players[0].name + ", player2= " + fighters.players[1].name);
	
	// round number of the game
	var round = 0;
	
	// fight function
	function fight(fighters){
		console.log('pass fight function arguments: ' + fighters.players[0].name, fighters.players[1].name);
		//alert(fighters.players[0].name + ":" + fighters.players[0].health + " *START* " + fighters.players[1].name + ":" + fighters.players[1].health);
	
	// get spidermans name and health in the top left
var kabal = document.querySelector('#kabal p'); // makes var = p tag inside of element with id of kabal
console.log(kabal);
kabal.innerHTML = fighters.players[0].name + ":" + fighters.players[0].health;	 //puts the code inside of the p tag 

// Get Batmans name and health in the top right 
var kratos = document.querySelector('#kratos p');
console.log(kratos);
kratos.innerHTML = fighters.players[1].name + ":" + fighters.players[1].health;	
	
		// basic "for loop"
		for(var i = 0; i < 10; i++){
			// generate a random number
			
			var minDamage1 = fighters.players[0].damage * .5;
			var minDamage2 = fighters.players[1].damage * .5;
			var f1 = Math.floor(Math.random() * (fighters.players[0].damage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (fighters.players[1].damage - minDamage2) + minDamage2);
			
			// inflicted damage formula
			fighters.players[0].health-= f1;
			fighters.players[1].health -= f2;
			
			
			console.log(fighters.players[0].name + ":" + fighters.players[0].health + "  " + fighters.players[1].name + ":" + fighters.players[1].health);	
			
			
		
			// calls the winnerCheck function
			var result = winnerCheck()
			console.log(result);	
			
			if (result === "no winner"){
				round++;
				var counter = document.getElementById('round');
				counter.innerHTML = round;
			//alert(fighters.players[0].name + ":" + fighters.players[0].health + " *ROUND " + round + " OVER*"  + fighters.players[1].name + ":" + fighters.players[1].health);
			}else{
				//alert(result);
				var counter = document.getElementById('round');
				counter.innerHTML = result;
				break; // exit out of the for loop
			};
		};		
	};
	
	// check for a winner
	function winnerCheck(){
		var result = "no winner";
		
		if(fighters.players[0].health < 1 && fighters.players[1].health < 1){
			result = "You Both Die";			
		}else if(fighters.players[0].health < 1){
			result = fighters.players[1].name + " WINS!!!"
		}else if(fighters.players[1].health < 1){
			result = fighters.players[0].name + " WINS!!!"
		}; //end of if, else if, else if
		return result;
		
	};  // end winnerCheck function
	
	// call (aka run) function check. This is where the program starts
	fight(fighters);

})();

