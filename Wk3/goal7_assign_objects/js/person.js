/**

 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 
  	Michael Saner
	11-13-2013
	Goal 7 - Assignment: Advanced Objects
**/

	// use a function to add more elements to the Person object
	var Person = function(name, row){
		this.name = name;
		this.action = this.actions[Math.floor(Math.random()*(this.actions.length - 0) + 0)];
		this.job = this.jobs[Math.floor(Math.random()*(this.jobs.length - 0) + 0)];
		this.row = row;	
		this.change = Math.floor(Math.random() * 150);	
	};
		
	//putting "jobs" and "actions" into the Person object
	Person.prototype.jobs = ["teacher","farmer","student","pilot"];
	Person.prototype.actions = ["sleeping","eating","working"];
	
	
	
	// let's add a function to the Person object prototype that will update our info
	Person.prototype.update = function(){
		this.action = this.actions[Math.floor(Math.random()*(this.actions.length - 0) + 0)];
		//this.change++;
		
		//if(this.change == 150)	{		
			var action = document.getElementById('r' + (this.row+1) + 'c3');
				
			action.innerHTML = this.action;
			//this.change = Math.floor(Math.random() * (180 - 120) + 120);
		//}
	};
	

	
	//adding Person object to the global window object
	window.Person = Person;