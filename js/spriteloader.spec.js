describe("Sprite loader’s", function() {

	beforeEach(function() {
		var imagelist = __html__['../karma/imagelist.fix.html'];
		document.body.appendChild(imagelist);
	});

	describe("load matrix function", function() {

		beforeEach(function() {
			spriteMatrix = "";
		});
		it("does not assign anything to the spriteMatrix variable if no argument is passed.", function() {
			loadMatrix();
	
			expect(spriteMatrix).toBeUndefined();
		});
	
		it("assigns its passed argument to the spriteMatrix variable.", function() {
			loadMatrix(link);
	
			expect(spriteMatrix).toBe(link);
			expect(spriteMatrix).notToBeUndefined();
		});
	
		it("overwrites the spriteMatrix variable if a value already exists.", function() {
			spriteMatrix = link;
		
			loadMatrix(mac);
	
			expect(spriteMatrix).toBe(mac);
			expect(spriteMatrix).notToBe(link);
			expect(spriteMatrix).notToBeUndefined();
		});

		it("throws an error if the passed argument is undefined.", function() {
			
		});
	});

	describe("render to canvas function", function() {
		it("");

		it("properly copies the array in spriteMatrix to imgData.", function() {
			
		});
	});

});