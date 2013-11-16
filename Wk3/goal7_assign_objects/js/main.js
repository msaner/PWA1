/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 
 	Michael Saner
	11-13-2013
	Goal 7 - Assignment: Advanced Objects
 */

names = [
	"Ralph", 
	"Max",  
	"Olivia",
	"Emily",
	"Ryan"
];
	console.log(names);
	
	People = [];
	
	for ( var i = 0; i < 3; i++ ){	
		//let's create a random number that will be used to randomly select a peson
		ranNum = Math.floor(Math.random() * (names.length - 0) + 0 );
		console.log("names array index: " + ranNum);
		
		
		
	}; //end for loop
 
	var person = new Person("name", "action", "job", "row");
	
	
	setInterval(runUpdate, 1000 / 30);
	function runUpdate(){
					
	};
	
	

	
	
console.log(person);	

