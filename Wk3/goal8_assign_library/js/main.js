/*
	PWA1: Goal8: Simple Library App
	
	Michael Saner
	11-15-2013
	Assignment: easyLibrary
*/


(function(){
	var anchors = document.querySelectorAll('a');
	console.log(anchors);
	
	var results = YOURLIBNAME(anchors);
	console.log(results);
	
	YOURLIBNAME(anchors);
	
})();  // end wrapper