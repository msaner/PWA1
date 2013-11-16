/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 
  	Michael Saner
	11-13-2013
	Goal 7 - Assignment: Advanced Objects
 */


	var Person = function(name, row){
			this.name = name;
			this.action = this.actions[Math.floor(Math.random()*(this.actions.length - 0) + 0)];
			this.job = this.jobs[Math.floor(Math.random()*(this.jobs.length - 0) + 0)];
			this.row = row;
			
		};
	
		Person.prototype.jobs = ["teacher","farmer","student","pilot"];
		Person.prototype.actions = ["sleeping","eating","working"];
	
	//adding Person object to the global window object
	window.Person = Person;