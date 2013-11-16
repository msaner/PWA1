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
	
	output = document.getElementById('output');
	console.log("what the script will output: " + output.innerHTML);
	
	guesses = 0;
	
	var myBtn = document.getElementsByTagName('button');
	console.log(myBtn);
	
	// generate random number from 1-10
	ranNum = Math.floor(1 + Math.random()*10);
	console.log(ranNum);
	
	
	var check = function () {
		input = document.getElementById('input').value;
		console.log(input);
			
			if(isNaN(input) || input == "" || input < 0 || input > 10){
				output.innerHTML = "ERROR: Please enter a number 1 - 10";
			}else{
				
				guesses++;		
				if(ranNum > input){			
					output.innerHTML = "That's too low, guess again!";
					console.log("That's too low, guess again");
				}else if(ranNum < input){
					output.innerHTML = "That's too high, guess again!";
					console.log("That's too high, guess again");
				}else if(ranNum == input){
					output.innerHTML = "YOU GUESSED THE MAGIC NUMBER IN " + guesses + " GUESSES!!!!!";
					console.log("YOU GUESSED THE MAGIC NUMBER IN " + guesses + " GUESSES!!!!!");	
					
					myBtn[0].disabled = true;				
				};
				
				if(guesses >= 3){
					if(ranNum != input){
						output.innerHTML = "GAME OVER!!! You have no more gueses left.  :(";
					};
					
					myBtn[0].disabled = true;
				};
			};
	};
	
	myBtn[0].addEventListener('click', check, false);



})();
