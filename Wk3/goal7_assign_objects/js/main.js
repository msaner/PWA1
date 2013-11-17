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
	
	// create People.contains   ---compare names assigned to People array.  if name is in people.name return true
	Array.prototype.contains = function(name){
		for(var i = 0; i < this.length; i++){
			if(this[i].name == name){
				return true
			}
		};
		return false;
	};
	
	for ( var i = 0; i < 3; i++ ){	
		//let's create a random number that will be used to randomly select a peson
		do{
			ranNum = Math.floor(Math.random() * (names.length - 0) + 0 );
			console.log("names array index: " + ranNum);
			
			var person = new Person(names[ranNum], i);	
			console.log(person);
		}while(People.contains(person.name)); 
		// we'll keep running the do loop to create a new person as long as the name already exists
		
		People[i] = person;
		
		
		
	}; //end for loop
 	console.log(People);
 
	//function to output persons name and job to the web page
	var populateHTML = function(){
		for ( var i = 0; i < 3; i++ ){	
			// create new index starting at 1 since li id tags begin with 1 not 0
			var li = i+1;
			// use li index to create tag names for each item
			var name = document.getElementById('r' + li + 'c1');
			var jobs = document.getElementById('r' + li + 'c2');
			
			name.innerHTML = People[i].name;
			jobs.innerHTML = People[i].job;
		};
	};
		
	populateHTML();
	
	
	function runUpdate(){
		People.forEach(function(person){
			//console.log(person);
			
			person.update()
		});
			
	};
	
	runUpdate();
	
	setInterval(runUpdate, 5000 );

	
	
//console.log(person);	

