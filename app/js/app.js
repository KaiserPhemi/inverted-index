{

	class InvertedIndex{

		/* Class Constructor */
		constructor(fileName){
			this.fileName = fileName;

		}

		/* Reads the data from the file being uploaded */
		readFile(){

			let fileContent = readFile('.json');
			fileContent.then((content) => {
				// Content of JSON file
			}, (err) => {
				// Error message if error is encountered
			});
		}

		/* Ensures all the documents in a particular file is valid */
		validateFile(){}
		
		/* Strips out special characters from documents to be indexed */
		tokenize(){}
		
		/* Creates the index for documents */
		createIndex(file, fileName){
			let tokens = [];

			const cleanTitle = file.title.replace(/[^w+/d]/g,'');
			const cleanText = file.text.replace(/[^w+/d]/g,'');

			tokens.forEach(() => {

			});
		}

		createCleanJSON(fileProp){

			return
		}

		/* Get’s indices created for particular files */
		getIndex(){}

		/* Searches through one or more indices for words */
		searchIndex(){}

	}
}