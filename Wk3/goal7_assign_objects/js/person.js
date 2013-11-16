/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 
  	Michael Saner
	11-13-2013
	Goal 7 - Assignment: Advanced Objects
 */


	var Person = function(name, action, job, row){
			this.name = name;
			this.action = action;
			this.job = job;
			this.row = row;
		};
	
		Person.prototype.jobs = ["teacher","farmer","student","pilot"];
		Person.prototype.actions = ["sleeping","eating","working"];
	
	//adding Person object to the global window object
	window.Person = Person;