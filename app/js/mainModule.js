{
  const MainController = ($scope) => {
    const invIndex = new InvertedIndex();
    $scope.uploads = () => {
      invIndex.readFile();
      $scope.uploadFile = () => {
       let uploadedFiles = [];
       if (window.File && window.FileReader && window.FileList
        && window.Blob) {
        let fileUpload = document.getElementsByClassName('file-upload')[0];
        if (invIndex.validateFile(fileUpload)) {
          uploadedFiles.push(fileUpload);
        }
      } else {
        return 'The File APIs are not fully supported in this browser.';
        }
      }
    };
  };

  const Directive = () => {

  };

  angular.module('mainApp', [])
  .controller('MainController', MainController)
  .directive('Directive', Directive);
}
