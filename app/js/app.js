{
	class InvertedIndex{

		/* Class Constructor */
		constructor(){
			this.indices = {};
		}

		/* Reads the data from the file being uploaded */
		readFile(){
			// this.book = book;
			let documentList = [],
				uploadedDoc = document.getElementsByClassName('file-upload');

			uploadedDoc.addEventListener('change', () => {
				Array.prototype.forEach.call(uploadedDoc.files, (file) =>{
					let reader = new FileReader();
					reader.addEventListener('load', () =>{
						documentList.push(file);
					});
					reader.readAsText(file);
				});
			});
			console.log(documentList);
			return documentList;
		}

		/* Ensures all the documents in a particular file is valid */
		validateFile(file){
			this.file = file;
			let checkField,
				isValid = true;
			try{
				const parsedJSON = JSON.parse(JSON.stringify(this.file));
				isValid = (parsedJSON.length === 0) ? false : checkField;
				
				checkField = parsedJSON.forEach((key) => {
					isValid = (typeof key.title !== 'string' || typeof key.text !== 'string') ? false : true;
				});
			}
			catch(error){
				isValid = false;
			}
			return isValid;
		}
		
		/* Strips out special characters from documents to be indexed */
		tokenize(text){
			this.text = text;
			return this.text
					.toLowerCase()				// Converts text to lower case
					.replace(/[^\w\s]/g, '');	// Removes any non-word character e.g. dot
		}
		
		/* Creates the index for documents */
		createIndex(name, content){
			let tokens = [];

			tokens.forEach(() => {

			});
		}

		/* Get’s indices created for particular files */
		getIndex(){}

		/* Searches through one or more indices for words */
		searchIndex(fileName, ...terms){

		}
	}
}