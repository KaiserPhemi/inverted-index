{

	/* Declarations */
	angular.module('invertedIndex', [])
	.controller('TableController', TableController)
	.controller('FileUploadController', FileUploadController);

	/* Controller handling table generated */
	TableController.$inject = ['$scope'];
	function TableController($scope){

		$scope.table='';	
	}

	/* Controller handling file upload */
	FileUploadController.$inject = ['$scope'];
	function FileUploadController($scope){

	}
}