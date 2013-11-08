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
	
	
	var values = {
		input: document.querySelector('#input'),
		output: document.querySelector('#output'),
		button: document.querySelector('button')
	};
	console.log(values[0], values[1], values[2]);
	
	var listener = document.querySelector('button');
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
	
	var validateInput = validateInput(ranNum, values);

})();
