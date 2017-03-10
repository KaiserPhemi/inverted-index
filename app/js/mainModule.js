(function(){
	'use strict';

	/**/
	angular.module('invertedIndex', [])
	.controller('OutputController', OutputController)
	.controller('FileUploadController', FileUploadController);

	/*Controller handling table generated*/
	OutputController.$inject = ['$scope'];
	function OutputController($scope){

		$scope.name="Femi";
	}

	/*Controller handling file upload*/
	FileUploadController.$inject = ['$scope'];
	function FileUploadController($scope){

	}
})();