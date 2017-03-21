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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> e0d1b649ed9beb3cbf30b8676d9ec0bd9eff3669
		validateFile(body){
			try {
				const data = JSON.parse(body);
    				// if came to here, then valid
    				return data;
  			}
  			catch(err){
    				// failed to parse
    		return null;
  			}
<<<<<<< HEAD
>>>>>>> node modules installed
=======
>>>>>>> e0d1b649ed9beb3cbf30b8676d9ec0bd9eff3669
		}
		
		/* Strips out special characters from documents to be indexed */
		tokenize(text){
			this.text = text;
			return this.text
					.toLowerCase()				// Converts text to lower case
					.replace(/[^\w\s]/g, '')	// Removes any non-word character e.g. dot
					.split(/\s+/)
					.sort();				// Turns it into an array
		}
		
		/* Creates the index for documents */
		createIndex(fileName, content){
			const fileIndex = {};

			content.forEach((objDoc, index) =>{
				for(const key in objDoc) {
					const tokens = this.tokenize(objDoc[key]);

					tokens.forEach((badge) => {
						if (fileIndex[badge]){								// Badge exist in fileIndex
							if (fileIndex[badge].indexOf(index) === -1) {	// Checks for unique index
								fileIndex[badge].push(index);
							}
						} else{
							fileIndex[badge] = [index];
						}
					});
				}
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
					searchList[query] = this.allIndices[fileName]['Match not found'];
				}
			});
			return searchList;
		}
	}

	/* App exported as Node package */
	module.exports = InvertedIndex;
}