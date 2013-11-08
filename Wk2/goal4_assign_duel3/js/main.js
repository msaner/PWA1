/*
NAME: Michael Saner
DATE: 11/6/2013
ASSIGNMENT: Goal 4 Duel 3
*/


//this is a self executing function
(function(){

	var fighters = { 
		players:[
			{name:'Spiderman', health:100, damage:23},
			{name:'Batman', health:100, damage:23}
		]
	};
	
	// round number of the game
	var round = 0;
	
	// fight function
	function fight(fighters){
		document.querySelector('#fight_btn').onclick = function(e){
	
			// get spidermans name and health in the top left
			var kabal = document.querySelector('#kabal p'); // makes var = p tag inside of element with id of kabal
			kabal.innerHTML = fighters.players[0].name + ":" + fighters.players[0].health;	 //puts the code inside of the p tag 
		
			// Get Batmans name and health in the top right 
			var kratos = document.querySelector('#kratos p');
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
				
				// get spidermans name and health in the top left
				var kabal = document.querySelector('#kabal p'); // makes var = p tag inside of element with id of kabal
				kabal.innerHTML = fighters.players[0].name + ":" + fighters.players[0].health;	 //puts the code inside of the p tag 
			
				// Get Batmans name and health in the top right 
				var kratos = document.querySelector('#kratos p');
				kratos.innerHTML = fighters.players[1].name + ":" + fighters.players[1].health;	
			
				// calls the winnerCheck function
				var result = winnerCheck()
				console.log(result);	
				
				if (result === "no winner"){
					round++;
					
					var kabal = document.querySelector('#kabal p'); // makes var = p tag inside of element with id of kabal
					kabal.innerHTML = fighters.players[0].name + ":" + fighters.players[0].health;	 //puts the code inside of the p tag 
			
					// Get Batmans name and health in the top right 
					var kratos = document.querySelector('#kratos p');
					kratos.innerHTML = fighters.players[1].name + ":" + fighters.players[1].health;	
	
				//alert(fighters.players[0].name + ":" + fighters.players[0].health + " *ROUND " + round + " OVER*"  + fighters.players[1].name + ":" + fighters.players[1].health);
				}else{
					//alert(result);
					var win = document.querySelector('#kratos p');
					win.innerHTML = result;
					var hide = document.querySelector('#kabal');
					hide.remove(hide.p);
					break; // exit out of the for loop
				};
			e.preventDefault();
			return false;
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

