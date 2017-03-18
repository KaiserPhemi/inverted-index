{

	class InvertedIndex{

		/* Class Constructor */
		constructor(indices){
			
			this.fileName = fileName;
		}

		/* Reads the data from the file being uploaded */
		readFile(){

			let fileContent = document.getElementsByClassName('file-upload');
			fileContent.addEventListener('change', event => {

    			// When the control has changed, there are new files
				let i = 0,
        			files = fileContent.files,
        			len = files.length;

    			for (; i < len; i++) {
        			console.log("Filename: " + files[i].name);
        			console.log("Type: " + files[i].type);
        			console.log("Size: " + files[i].size + " bytes");
    			}
			}, false);
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

			const cleanTitle = file.title.replace(/[^w+/d]/g,'');
			const cleanText = file.text.replace(/[^w+/d]/g,'');

			tokens.forEach(() => {

			});
		}

		/* Creates a clean text from content */
		// normalizeText(text){
		// 	this.text = text;

		// 	return this.text
		// 			.toLowerCase() 
		// 			.replace(/[^\w\s]/g, '') 
		// 			.split(/\s+/) 
		// 			.sort(); 
		// }

		/* Get’s indices created for particular files */
		getIndex(){}

		/* Searches through one or more indices for words */
		searchIndex(){}

	}
}