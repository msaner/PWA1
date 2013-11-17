/*
	PWA1: Goal8: Simple Library App
	
	Michael Saner
	11-15-2013
	Assignment: easyLibrary
*/

(function(){

var anchors = 	document.querySelectorAll('a');
	console.log(anchors);
	
var results = Ryu(anchors);
	console.log(results);	
	
Ryu(anchors, Ryu.prototype.each());

	
	
	
	
})();  // end wrapper