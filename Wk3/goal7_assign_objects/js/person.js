/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 
  	Michael Saner
	11-13-2013
	Goal 7 - Assignment: Advanced Objects
 */


	var Person = {
		constructor: function(name, action, job, row){
			this.name = name;
			this.action = action;
			this.job = job;
			this.row = row;
		},
		jobs: ["teacher","farmer","student","pilot"],
		actions: ["sleeping","eating","working"]
	};
	
	//adding Person object to the global window object
	window.Person = Person;