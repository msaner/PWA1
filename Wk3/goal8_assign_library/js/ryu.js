/*
	PWA1: Goal8:  Simple Library
	Michael Saner
	11-15-2013
	Assignment: easyLibrary

*/

// constructor
var ryu = function(anchors){   // "anchors" is the parameter passed as an argument from main.js

    return new ryu.prototype.init();

}; //close constructor

// prototype
ryu.prototype = {

    init: function(anchors){
		ryu.prototype.elements = anchors;
		
	},
	each:function(){
		
		
	},

    elements: []

}; // end prototype

ryu.prototype.init.prototype = ryu.prototype;