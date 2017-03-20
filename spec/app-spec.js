{
	const test = require('../app/js/app.js');

	describe('Checks for valid input file', () => {
  		
  		it('Should return true for valid json file', () => {
    		expect(test.validateFile(book.json)).toBe(true);
  		});
	});

	describe('Checks for invalid input file', () => {
  		
  		it('Should return false for invalid file', () => {
    		expect(test.validateFile(fakebook.json)).toBe(false);
  		});
	});
	
}