// Wrap the whole thing in an anonymous closure.
(function(){

	// Initialise the matrix variables.
	var mac, link, pocketwatch, spriteMatrix;

	// The default "mac" array is a 16 × 16 matrix. Each row contains 16 arrays with 3
	// values each. (Red, green, and blue.) The alpha channel is either 0 or 255,
	// and is assigned using an if{} in the main loop of the function below. This same
	// pattern is used for the other two sprites in this demo.
	mac = [
		[ [], [], [], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [182, 187, 193], [72, 86, 104], [72, 86, 104], [72, 86, 104], [72, 86, 104], [72, 86, 104], [72, 86, 104], [182, 187, 193], [222, 224, 211], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [72, 86, 104], [155, 173, 192], [143, 162, 183], [143, 162, 183], [145, 163, 183], [150, 168, 187], [166, 182, 199], [72, 86, 104], [222, 224, 221], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [72, 86, 104], [131, 151, 173], [131, 151, 173], [131, 151, 173], [131, 151, 173], [140, 158, 179], [151, 168, 187], [72, 86, 104], [222, 224, 211], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [72, 86, 104], [131, 151, 173], [131, 151, 173], [131, 151, 173], [131, 151, 173], [139, 158, 178], [150, 166, 186], [72, 86, 104], [222, 224, 211], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [72, 86, 104], [131, 151, 173], [131, 151, 173], [131, 151, 173], [131, 151, 173], [138, 157, 178], [148, 166, 185], [72, 86, 104], [222, 224, 211], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [72, 86, 104], [112, 130, 153], [121, 140, 163], [121, 140, 163], [121, 140, 163], [126, 144, 166], [120, 138, 159], [72, 86, 104], [222, 224, 211], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [182, 187, 193], [72, 86, 104], [72, 86, 104], [72, 86, 104], [72, 86, 104], [72, 86, 104], [72, 86, 104], [182, 187, 193], [222, 224, 221], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [213, 215, 201], [196, 198, 183], [213, 215, 201], [222, 224, 211], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [218, 44, 52], [222, 224, 211], [222, 224, 211], [222, 224, 211], [0, 0, 0], [0, 0, 0], [0, 0, 0], [147, 147, 147], [222, 224, 211], [55, 56, 51], [], [] ],
		[ [], [], [55, 56, 51], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [222, 224, 211], [55, 56, 51], [], [] ],
		[ [], [], [69, 70, 64], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [69, 70, 64], [], [] ],
		[ [], [], [], [55, 56, 51], [154, 157, 143], [185, 188, 170], [229, 233, 218], [212, 215, 197], [203, 205, 189], [185, 188, 170], [154, 157, 143], [119, 119, 119], [55, 56, 51], [], [], [] ],
		[ [], [], [], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [55, 56, 51], [], [], [] ]
	];
	// 15 × 15
	link = [
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
	// 13 × 16
	pocketwatch = [
		[ [], [], [], [], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [], [], [], [] ],
		[ [], [], [], [0, 0, 0], [152, 56, 56], [248, 88, 88], [248, 248, 248], [248, 88, 88], [152, 56, 56], [0, 0, 0], [], [], [] ],
		[ [], [], [], [0, 0, 0], [152, 56, 56], [248, 88, 88], [248, 248, 248], [248, 88, 88], [152, 56, 56], [0, 0, 0], [], [], [] ],
		[ [], [], [], [], [0, 0, 0], [0, 0, 0], [152, 56, 56], [0, 0, 0], [0, 0, 0], [], [], [], [] ],
		[ [], [], [0, 0, 0], [0, 0, 0], [248, 88, 88], [248, 248, 248], [248, 88, 88], [248, 88, 88], [248, 248, 248], [0, 0, 0], [0, 0, 0], [], [] ],
		[ [], [0, 0, 0], [248, 88, 88], [248, 88, 88], [248, 88, 88], [248, 248, 248], [248, 248, 248], [248, 248, 248], [248, 88, 88], [248, 248, 248], [152, 56, 56], [0, 0, 0], [] ],
		[ [], [0, 0, 0], [248, 88, 88], [248, 248, 248], [248, 248, 248], [248, 248, 248], [0, 0, 0], [248, 248, 248], [248, 248, 248], [248, 248, 248], [248, 88, 88], [0, 0, 0], [] ],
		[ [0, 0, 0], [248, 88, 88], [248, 88, 88], [248, 248, 248], [248, 248, 248], [248, 248, 248], [0, 0, 0], [248, 248, 248], [248, 248, 248], [248, 248, 248], [248, 88, 88], [152, 56, 56], [0, 0, 0] ],
		[ [0, 0, 0], [248, 88, 88], [248, 248, 248], [248, 248, 248], [248, 248, 248], [248, 248, 248], [0, 0, 0], [248, 248, 248], [248, 248, 248], [160, 160, 160], [248, 248, 248], [152, 56, 56], [0, 0, 0] ],
		[ [0, 0, 0], [248, 88, 88], [248, 248, 248], [248, 248, 248], [248, 248, 248], [248, 248, 248], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [248, 248, 248], [152, 56, 56], [0, 0, 0] ],
		[ [0, 0, 0], [248, 88, 88], [248, 248, 248], [248, 248, 248], [248, 248, 248], [248, 248, 248], [248, 248, 248], [160, 160, 160], [248, 248, 248], [248, 248, 248], [160, 160, 160], [152, 56, 56], [0, 0, 0] ],
		[ [0, 0, 0], [248, 88, 88], [248, 88, 88], [248, 248, 248], [248, 248, 248], [248, 248, 248], [160, 160, 160], [248, 248, 248], [248, 248, 248], [160, 160, 160], [248, 88, 88], [152, 56, 56], [0, 0, 0] ],
		[ [], [0, 0, 0], [248, 88, 88], [248, 248, 248], [248, 248, 248], [160, 160, 160], [248, 248, 248], [248, 248, 248], [160, 160, 160], [160, 160, 160], [152, 56, 56], [0, 0, 0], [] ],
		[ [], [0, 0, 0], [152, 56, 56], [248, 88, 88], [248, 88, 88], [248, 248, 248], [248, 248, 248], [160, 160, 160], [248, 88, 88], [152, 56, 56], [152, 56, 56], [0, 0, 0], [] ],
		[ [], [], [0, 0, 0], [0, 0, 0], [152, 56, 56], [152, 56, 56], [152, 56, 56], [152, 56, 56], [152, 56, 56], [0, 0, 0], [0, 0, 0], [], [] ],
		[ [], [], [], [], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [], [], [], [] ]
	];

	// Pass a sprite name as an argument and assign it to spriteMatrix.
	function loadMatrix(sprite) {
		spriteMatrix = sprite;
	}

	// Copy the array to the canvas with the given ID.
	function copyMatrixToCanvas(matrix, canvasId) {

		// Initialize the function's variables.
		var c, context, h, w, imgData, data, height, width;

		c = document.querySelector(canvasId);
		c.width = matrix.length;
		c.height = matrix[0].length;  
		
		context = c.getContext("2d");
		h = context.canvas.height;
		w = context.canvas.width;
		imgData = context.getImageData(0, 0, w, h);
		data = imgData.data;
		height = matrix.length;
		width = matrix[0].length;

		// Loop through the array and assign the value to the pixel at (x, y).
		for(var i = 0; i < height; i++) {
			for(var j = 0; j < width; j++) {
				var s, x;

				// Calculate the index, since canvas pixels are made up of 4 values (rgba).
				s = 4 * i * w + 4 * j;

				// Take the current (x, y) position in the array and assign it to a variable.
				x = matrix[i][j];

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
				}
			}
		}

		// Take the imageData and render it to the canvas.
		context.putImageData(imgData, 0, 0);	
	}

	// Listen for clicks on the img elements and swap sprites when it hears one.
	// I really should DRY this out.
	document.getElementById("mac").addEventListener('click', function () {
		loadMatrix(mac);
		copyMatrixToCanvas(spriteMatrix, "#spriteDisplay");
	}, false);
	document.getElementById("link").addEventListener('click', function () {
		loadMatrix(link);
		copyMatrixToCanvas(spriteMatrix, "#spriteDisplay");
	}, false);
	document.getElementById("pocketwatch").addEventListener('click', function () {
		loadMatrix(pocketwatch);
		copyMatrixToCanvas(spriteMatrix, "#spriteDisplay");
	}, false);

	// Call our functions.
	loadMatrix(mac);
	copyMatrixToCanvas(spriteMatrix, "#spriteDisplay");
})();