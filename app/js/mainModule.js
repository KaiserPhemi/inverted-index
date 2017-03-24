{
	/** Declarations */
	angular.module('mainApp', [])
	.controller('MainController', MainController);

	/** Controller handling file upload */
	MainController.$inject = ['$scope'];
	function MainController($scope){
		
		/** Instance of class created */
		const invIndex = new InvertedIndex();

		/**
		 * Handles file uploads.
		 * @param  {[type]}
		 * @return {[type]}
		 */
		$scope.uploads = (upload) => {
			console.log(uploads);
		}
		
	}
}