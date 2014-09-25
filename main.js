// Wrap the whole thing in an anonymous closure.
(function(){

	// The sprite array is a 15 × 15 matrix. Each row contains 15 arrays with 3
	// values each. (Red, green, and blue.) The alpha channel is either 0 or 255,
	// and is assigned using an if{} in the main loop of the function below.
	var spriteArray = [
	    [ [], [], [], [], [], [24, 24, 24], [24, 24, 24], [24, 24, 24], [24, 24, 24], [], [], [], [], [], [] ],
	    [ [], [], [], [], [24, 24, 24], [0, 136, 88], [0, 216, 112], [0, 216, 112], [0, 216, 112], [24, 24, 24], [], [], [], [], [] ],
	    [ [], [24, 24, 24], [], [24, 24, 24], [0, 136, 88], [0, 136, 88], [0, 136, 88], [0, 216, 112], [0, 136, 88], [0, 136, 88], [24, 24, 24], [], [24, 24, 24], [], [] ],
	    [ [24, 24, 24], [248, 200, 120], [24, 24, 24], [240, 120, 104], [240, 120, 104], [24, 24, 24], [24, 24, 24], [24, 24, 24], [24, 24, 24], [240, 120, 104], [240, 120, 104], [24, 24, 24], [248, 200, 120], [24, 24, 24], [] ],
	    [ [24, 24, 24], [232, 152, 88], [248, 200, 120], [24, 24, 24], [240, 120, 104], [240, 120, 104], [240, 120, 104], [240, 120, 104], [240, 120, 104], [240, 120, 104], [24, 24, 24], [248, 200, 120], [232, 152, 88], [24, 24, 24], [] ],
	    [ [], [24, 24, 24], [232, 152, 88], [24, 24, 24], [248, 248, 248], [248, 248, 248], [24, 24, 24], [24, 24, 24], [248, 248, 248], [248, 248, 248], [24, 24, 24], [232, 152, 88], [24, 24, 24], [], [] ],
	    [ [], [], [24, 24, 24], [232, 152, 88], [248, 248, 248], [24, 24, 24], [232, 152, 88], [232, 152, 88], [24, 24, 24], [248, 248, 248], [232, 152, 88], [232, 152, 88], [24, 24, 24], [], [] ],
	    [ [], [24, 24, 24], [24, 24, 24], [24, 24, 24], [24, 24, 24], [24, 24, 24], [248, 200, 120], [248, 200, 120], [24, 24, 24], [248, 200, 120], [232, 152, 88], [24, 24, 24], [], [], [] ],
	    [ [24, 24, 24], [248, 248, 248], [128, 120, 192], [128, 120, 192], [128, 120, 192], [248, 248, 248], [24, 24, 24], [248, 200, 120], [248, 200, 120], [248, 200, 120], [24, 24, 24], [0, 136, 88], [24, 24, 24], [], [] ],
	    [ [24, 24, 24], [248, 248, 248], [80, 72, 160], [80, 72, 160], [80, 72, 160], [248, 248, 248], [24, 24, 24], [24, 24, 24], [24, 24, 24], [24, 24, 24], [0, 136, 88], [0, 136, 88], [24, 24, 24], [24, 24, 24], [] ],
	    [ [24, 24, 24], [248, 248, 248], [80, 72, 160], [80, 72, 160], [80, 72, 160], [248, 248, 248], [24, 24, 24], [0, 136, 88], [0, 136, 88], [0, 136, 88], [0, 136, 88], [0, 136, 88], [248, 200, 120], [248, 200, 120], [24, 24, 24] ],
	    [ [24, 24, 24], [248, 248, 248], [80, 72, 160], [80, 72, 160], [80, 72, 160], [248, 248, 248], [24, 24, 24], [0, 136, 88], [0, 136, 88], [0, 136, 88], [248, 248, 0], [24, 24, 24], [248, 200, 120], [248, 200, 120], [24, 24, 24] ],
	    [ [24, 24, 24], [248, 248, 248], [80, 72, 160], [80, 72, 160], [80, 72, 160], [248, 248, 248], [24, 24, 24], [248, 248, 0], [248, 248, 0], [248, 248, 0], [0, 136, 88], [24, 24, 24], [24, 24, 24], [24, 24, 24], [] ],
	    [ [24, 24, 24], [24, 24, 24], [248, 248, 248], [248, 248, 248], [248, 248, 248], [24, 24, 24], [24, 24, 24], [0, 136, 88], [0, 136, 88], [0, 136, 88], [24, 24, 24], [24, 24, 24], [], [], [] ],
	    [ [], [24, 24, 24], [24, 24, 24], [24, 24, 24], [24, 24, 24], [24, 24, 24], [24, 24, 24], [24, 24, 24], [24, 24, 24], [232, 40, 16], [232, 40, 16], [24, 24, 24], [], [], [] ]
	];

	// Function to copy the array to the canvas with the given ID.
	function copyArrayToCanvas(spriteArray, canvasId){

		// Initialize the function's variables.
		var c, context, h, w, imgData, data, height, width;

		c = document.getElementById('sprite');
		c.width = spriteArray.length;
		c.height = spriteArray[0].length;  
		
		context = document.getElementById(canvasId).getContext("2d");
		h = context.canvas.height;
		w = context.canvas.width;
		imgData = context.getImageData(0, 0, w, h);
		data = imgData.data;
		height = spriteArray.length;
		width = spriteArray[0].length;

		// Loop through the array and assign the value to the pixel at (x, y).
		for(var i = 0; i < height; i++) {
			for(var j = 0; j < width; j++) {
				var s, x;

				// Calculate the index, since canvas pixels are made up of 4 values (rgba).
				s = 4 * i * w + 4 * j;

				// Take the current (x, y) position in the array and assign it to a variable.
				x = spriteArray[i][j];

				// Grab the rgb values from the array based on the index.
				data[s] = x[0];
				data[s + 1] = x[1];
				data[s + 2] = x[2];

				// If array value at current index is blank, make it transparent…
				if(data[s] == "" && data[s+1] == "" && data[s+2] == "") {
					data[s + 3] = 0;
				// … otherwise, make it opaque.
				} else {
					data[s + 3] = 255;
				};
			}
		}

		// Take the imageData and render it to the canvas.
		context.putImageData(imgData, 0, 0);	
	}

	// Call the function.
	copyArrayToCanvas(spriteArray, "sprite");

})();