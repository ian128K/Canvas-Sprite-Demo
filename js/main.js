// Initialise the matrix variables.
var mac, link, pocketwatch, spriteMatrix;

// Each row contains an arbitrary but equal number of arrays with 3 (or 4)
// values each. (Red, green, and blue, with optional alpha.) If the alpha
// channel is missing, it's assigned as either 0 or 255 using an if{} in
// the main for loop of the copyMatrixToCanvas function. If it's present, it's
// passed through in that same loop. The number of rows is also arbitrary, but
// for the purposes of this demo, no matrix is larger than 16 × 16.

// The default "mac" array is a 16 × 16 matrix.
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
	[ [], [], [0, 0, 0], [0, 0, 0], [248, 88, 88], [248, 88, 88], [248, 88, 88], [248, 88, 88], [88, 88, 88], [0, 0, 0], [0, 0, 0], [], [] ],
	[ [], [0, 0, 0], [248, 88, 88], [248, 88, 88], [248, 88, 88], [248, 248, 248], [248, 248, 248], [248, 248, 248], [248, 88, 88], [248, 88, 88], [152, 56, 56], [0, 0, 0], [] ],
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
	var c, context, w, h, imgData, data, width, height;

	c = document.querySelector(canvasId);
	c.width = matrix[0].length;
	c.height = matrix.length;  
	
	context = c.getContext("2d");
	w = context.canvas.width;
	h = context.canvas.height;
	imgData = context.getImageData(0, 0, w, h);
	data = imgData.data;
	width = matrix[0].length;
	height = matrix.length;

	// Loop through the array and assign the RGB value to the pixel at (x, y).
	for(var i = 0; i < height; i++) {
		for(var j = 0; j < width; j++) {
			var s, x;

			// Calculate the index of imgData.data, since canvas pixels are made up of 4
			// values (RGBa).
			s = 4 * i * w + 4 * j;

			// Take the current (x, y) position in the array and assign it to a variable.
			x = matrix[i][j];

			// Grab the rgb values from the array based on the index.
			data[s] = x[0];
			data[s + 1] = x[1];
			data[s + 2] = x[2];

			// If array value at current index is undefined OR outside of the number
			// range 0–255, make that pixel transparent...
			if(
				(typeof x[0] === "undefined" && typeof x[1] === "undefined" && typeof x[2] === "undefined") ||
				((data[s] < 0 || data[s] > 255) || (data[s + 1] < 0 || data[s + 1] > 255) || (data[s + 2] < 0 || data[s + 2] > 255))
				) {
				data[s + 3] = 0;
			// ...but if an alpha channel is already defined, pass it through...
			} else if(typeof x[3] !== "undefined") {
				data[s + 3] = x[3];
			// ...otherwise, make make that pixel opaque.
			} else {
				data[s + 3] = 255;
			}
		}
	}

	// Take the imgData object and render it to the canvas.
	context.putImageData(imgData, 0, 0);	
}

// Listen for clicks on the img elements and swap sprites when it hears one.
// I really should DRY this out.
macID = 
document.getElementById('mac').addEventListener('click', function () {
	loadMatrix(mac);
	copyMatrixToCanvas(spriteMatrix, "#spriteDisplay");
}, false);
document.getElementById('link').addEventListener('click', function () {
	loadMatrix(link);
	copyMatrixToCanvas(spriteMatrix, "#spriteDisplay");
}, false);
document.getElementById('pocketwatch').addEventListener('click', function () {
	loadMatrix(pocketwatch);
	copyMatrixToCanvas(spriteMatrix, "#spriteDisplay");
}, false);

// Call our functions.
loadMatrix(mac);
copyMatrixToCanvas(spriteMatrix, "#spriteDisplay");