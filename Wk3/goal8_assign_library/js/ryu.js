/*
	PWA1: Goal8:  Simple Library
	Michael Saner
	11-15-2013
	Assignment: easyLibrary

*/

// constructor
var Ryu = function(anchors){   // "anchors" is the parameter passed as an argument from main.js

    return new Ryu.prototype.init();
	console.log(anchors);
}; //close constructor

// prototype
Ryu.prototype = {
	
    init: function(anchors){
		this.anchors = anchors;
		console.log(this.anchors);
	},
	each:function(){
		for( var i = 0; i < elements.length; i++ ){
			console.log(this[i].element);
		};
		
	},

    elements: []

}; // end prototype

Ryu.prototype.init.prototype = Ryu.prototype;