{
	class InvertedIndex{

		/* Class Constructor */
		constructor(){
			this.allIndices = {};
		}

		/* Reads the data from the file being uploaded */
		readFile(file){
			let uploadedDoc = document.getElementsByClassName('file-upload');
			uploadedDoc.addEventListener('change', () => {
				Array.prototype.forEach.call(uploadedDoc.files, (file) =>{
					let reader = new FileReader();
					reader.addEventListener('load', () =>{
						if (this.validateFile(file)) {
							this.allIndices[fileName] = file; 
						}
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
					.replace(/[^\w\s]/g, '')	// Removes any non-word character e.g. dot
					.split(/\s+/);				// Turns it into an array
		}
		
		/* Creates the index for documents */
		createIndex(fileName, content){
			let fileIndex = {}
			let tokens = [];

			tokens.forEach(() => {

			});
			return this.allIndices[fileName];
		}

		/* Get’s indices created for particular files */
		getIndex(fileName){

			return this.allIndices[fileName];
		}

		/* Searches through one or more indices for words */
		searchIndex(fileName, query){
			let searchList = {};
			queries.forEach((query) => {
				if (query in this.allIndices[fileName]) {
					searchList[query] = this.allIndices[fileName][query];
				}
				else{
					
				}
			});
		}
	}
}