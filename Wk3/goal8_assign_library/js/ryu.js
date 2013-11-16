/*
	PWA1: Goal8:  Simple Library
	Michael Saner
	11-15-2013
	Assignment: easyLibrary

*/

// constructor
var Ryu = function(anchors){   // "anchors" is the parameter passed as an argument from main.js

    return new Ryu.prototype.init();

}; //close constructor

// prototype
Ryu.prototype = {

    init: function(anchors){
		Ryu.prototype.elements = anchors;
		
	},
	each:function(){
		
		
	},

    elements: []

}; // end prototype

Ryu.prototype.init.prototype = Ryu.prototype;