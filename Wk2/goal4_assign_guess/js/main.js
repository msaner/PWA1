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
	
	var myBtn = document.getElementsByTagName('button');
	console.log(myBtn);
	
	// generate random number from 1-10
	ranNum = Math.floor(1 + Math.random()*10);
	console.log(ranNum);
	
	
	var check = function () {
		var input = document.getElementById('input').innerHTML;
		console.log("the user entered: " + input);
		
			if(ranNum > input){			
				output.innerHTML = "That's too low, guess again!";
				console.log("That's too low, guess again");
			}else if(ranNum < input){
				output.innerHTML = "That's too high, guess again!";
				console.log("That's too high, guess again");
			}else{
				output.innerHTML = "YOU GUESSED THE MAGIC NUMBER!!!!!";
				console.log("YOU GUESSED THE MAGIC NUMBER!!!!!");
			};
	};
	
	myBtn[0].addEventListener('click', check, false);
	
	


})();
