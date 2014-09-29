/// <reference path="main.js">

describe("loadMatrix()", function() {
	it("should not assign anything to the spriteMatrix variable if no argument is passed.", function() {
		spriteMatrix = "";

		loadMatrix();

		expect(spriteMatrix).toBeUndefined();
	});

	it("should assign its argument to the spriteMatrix variable.", function() {
		spriteMatrix = "";

		loadMatrix(link);

		expect(spriteMatrix).toBe(link);
		expect(spriteMatrix).notToBeUndefined();
	});

	it("should overwrite the spriteMatrix variable if a value already exists.", function() {
		spriteMatrix = link;
	
		loadMatrix(mac);

		expect(spriteMatrix).toBe(mac);
		expect(spriteMatrix).notToBe(link);
		expect(spriteMatrix).notToBeUndefined();
	});
});

describe("copyMatrixToCanvas()", function() {
	it("should properly copy the array in spriteMatrix to imgData.", function() {
		
	});
});