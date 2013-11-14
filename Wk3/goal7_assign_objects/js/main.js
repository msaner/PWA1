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

//let's create a random number that will be used to randomly select a peson
	var ranNum = Math.floor(Math.random() * (names.length - 0) + 0 );
	console.log(ranNum);
	
//check to see that we can pull a random name from the array based on the random # we just generated
	console.log(names[ranNum]);
	
//now let's create 3 objects called Person and place each reference into an array
	var person = new Person(names[ranNum], ranNum);
	
	console.log(person);	