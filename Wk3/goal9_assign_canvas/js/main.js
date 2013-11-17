/**
 * Created by:
 * Class: PWA1
 * Goal: Goal9
 
 	Michael Saner
	11-16-2013
	Canvas
 */

console.log("start canvas");

(function(){
    
	// dynamically create a canvas
	var canvas = document.createElement("canvas");
	
	// set the size of the canvas
	canvas.width = 400;
	canvas.height = 300;
	
	//add the canvas to the HTML document
	document.body.appendChild(canvas);

	// set the method to allow drwaing objects on the canvas
	var ctx = canvas.getContext('2d');
	
	// variable to store an array of 4 numbers
	var chartData = [
		23,
		56,
		98,
		47
	];
	var maxBarHeight = 200;
	
	// create an image
	var img = new Image();
	
	// define location of image file
	img.src = "images/bg.jpg";
	
	// create the image and wait to load before instantiating it
	img.addEventListener('load', function(){
		ctx.drawImage(img, 0, 0, 400, 300)
		
		drawBars(chartData);
			
	}, false);
	
	var drawBars = function(){
		// set the font used for the numbers of each bar on the graph
			ctx.font = '14px Georgia'
		
	};
	
})();