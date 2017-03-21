{
	const InvertedIndex = require('../app/js/app.js'),
		  invIndexInstance = new InvertedIndex();

	describe('Checks for valid input file', () => {
  		
  		it('Should return true for valid json file', () => {
    		expect(invIndexInstance.validateFile(book.json)).toBe(true);
  		});

  		it('Should return true for valid fields', () => {
  			expect(invIndexInstance.validateFile('[{"title":"Harry Porter", "text":"Voldemort"}]')).toBe(true);
  		});
	});

	describe('Checks for invalid input file', () => {
  		
  		it('Should return false for invalid file', () => {
    		expect(invIndexInstance.validateFile(fakebook.json)).toBe(false);
  		});
	});
	
}