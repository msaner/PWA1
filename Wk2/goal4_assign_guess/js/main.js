/*
 * GUESSING GAME:
 *
 * Created By: Michael Saner
 * Date: Nov. 7, 2013
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
	
	// generate random number from 1-10
	var ranNum = Math.floor(1 + Math.random()*10);
	console.log(ranNum);
	
	 input = document.querySelector('#input').value;
	var out = document.querySelector('#output');
	 btn =  document.querySelector('button');
	
	console.log("input: " + input, "output: " + out, "button:" + btn);
	
	document.querySelector('button').onclick = function(e){
	
		if (input<ranNum){
			console.log("That's too low!");
		} else if(input.value > ranNum){
			console.log("That's too high!");
		};
			
		
		e.preventDefault();
		return false;
	};
	
	
	
	/*var listener = document.querySelector('button');
	listener.addEventListener('onclick', validateInput, false);
	
	 function validateInput(ranNum, values){
		console.log('function validateInput is running');
		console.log("random number " + ranNum + " made it inside the function");
				
		playerGuess = parseInt(values.input.value);
		
		if (isNaN(playerGuess)){
			var NotValidInput = document.getElementById(output);
			NotValidInput.innerHTML('That is not a valid guess. Enter a number 1-10');
		};
	};
	
	var validateInput = validateInput(ranNum, values);*/

})();
