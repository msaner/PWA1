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
		
		// loop through each item in the chartData array and draw a rectangle
		for(var i = 0; i < chartData.length; i++){
			
			// start drawing the line
			ctx.beginPath();
			// set the color of the line fill
			ctx.fillStyle = "rgba(100, 200, 200, 0.75)";
			
			// set the height of each bar
			var height = maxBarHeight*chartData[i]/100;
			
			// position and draw each bar
			ctx.rect(i*80+90, 270-height, 50, height);
			
			// call the fill method
			ctx.fill();
			
			// color of the text
			ctx.fillStyle = "rgb(255, 255, 255)";
			
			// call the text fill
			ctx.fillText(chartData[i], i*80+110, 260-height, 50, height);
		};			
		
		// call function to write out text the bar chart needs
		
		
		var drawChartText = function(){
			ctx.font = "20px Georgia";
			ctx.fillStyle = "rgb(255, 255, 255)";	
			
			// call fill text method to write out the header
			ctx.fillText('TEST GRADES', 30, 30);
			
			// write a label below each bar
			var xAxisData = [
				"Quiz 1",
				"Quiz 2",
				"Quiz 3",
				"Quiz 4"
			];
			
			ctx.font = "14px Georgia";
			ctx.fillStyle = "rgb(0, 0, 0)";
			
			for(var i = 0; i < xAxisData.length; i++){
				ctx.fillText(xAxisData[i],i*80+95, 290);
			};		
		};	
		
	drawChartText();
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})();